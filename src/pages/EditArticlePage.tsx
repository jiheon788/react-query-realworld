import useInputs from '@/lib/hooks/useInputs';
import queryClient from '@/queries/queryClient';
import { useUpdateArticleMutation } from '@/queries/articles.query';
import { QUERY_ARTICLE_KEY } from '@/constants/query.constant';
import { useLocation, useNavigate } from 'react-router-dom';

const EditArticlePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [articleData, onChangeArticleData, setArticleData] = useInputs({
    slug: state.slug,
    title: state.title,
    description: state.description,
    body: state.body,
    tag: '',
    tagList: state.tagList,
  });

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!articleData.tagList.includes(articleData.tag)) {
        addTag(articleData.tag);
      }
    }
  };

  const addTag = (newTag: string) => {
    setArticleData({
      ...articleData,
      tag: '',
      tagList: [...articleData.tagList, newTag],
    });
  };

  const removeTag = (target: string) => {
    setArticleData({ ...articleData, tagList: articleData.tagList.filter((tag: string) => tag !== target) });
  };

  const updateArticleMutation = useUpdateArticleMutation();

  const onUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { slug, title, description, body, tagList } = articleData;
    updateArticleMutation.mutate(
      { slug, title, description, body, tagList },
      {
        onSuccess: (res) => {
          queryClient.invalidateQueries({ queryKey: [QUERY_ARTICLE_KEY] });
          const newSlug = res.data.article.slug;
          navigate(`/article/${newSlug}`, { state: newSlug });
        },
      },
    );
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form onSubmit={onUpdate}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    name="title"
                    value={articleData.title}
                    onChange={onChangeArticleData}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    name="description"
                    value={articleData.description}
                    onChange={onChangeArticleData}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    name="body"
                    value={articleData.body}
                    onChange={onChangeArticleData}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                    name="tag"
                    value={articleData.tag}
                    onChange={onChangeArticleData}
                    onKeyDown={onEnter}
                  />
                </fieldset>
                <div className="tag-list">
                  {articleData.tagList.map((tag: string) => (
                    <span className="tag-default tag-pill" key={tag}>
                      <i
                        role="presentation"
                        className="ion-close-round"
                        style={{ cursor: 'pointer', marginRight: '5px' }}
                        onClick={() => removeTag(tag)}
                      />{' '}
                      {tag}{' '}
                    </span>
                  ))}
                </div>
                <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                  Update Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditArticlePage;
