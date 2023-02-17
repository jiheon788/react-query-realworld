import { convertToDate } from '@/lib/utils';
import { useGetArticleQueries } from '@/queries/articles.query';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ButtonSelector from '@/components/article/ButtonSelector';

const ArticlePage = () => {
  const { state } = useLocation();
  const [article, comments] = useGetArticleQueries(state);

  console.log(comments);
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.data.title}</h1>

          <div className="article-meta">
            <a href="/">
              <img src={article.data.author.image} alt="comment-author" />
            </a>
            <div className="info">
              <a href="/" className="author">
                {article.data.author.username}
              </a>
              <span className="date">{convertToDate(article.data.updatedAt)}</span>
            </div>
            <ButtonSelector articleInfo={article.data}></ButtonSelector>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <ReactMarkdown children={article.data.body} remarkPlugins={[remarkGfm]}></ReactMarkdown>
          </div>
        </div>
        <div>
          {article.data.tagList.map((tag: string) => (
            <li key={tag} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </div>
        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href="profile.html">
              <img src={article.data.author.image} alt="profile" />
            </a>
            <div className="info">
              <a href="/" className="author">
                {article.data.author.username}
              </a>
              <span className="date">{convertToDate(article.data.updatedAt)}</span>
            </div>
            <ButtonSelector articleInfo={article.data}></ButtonSelector>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea className="form-control" placeholder="Write a comment..." rows={3}></textarea>
              </div>
              <div className="card-footer">
                <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="comment-author" />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <a href="/" className="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="comment-author" />
                </a>
                &nbsp;
                <a href="/" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <a href="/" className="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" alt="comment-author" />
                </a>
                &nbsp;
                <a href="/" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-edit"></i>
                  <i className="ion-trash-a"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
