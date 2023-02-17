import { QUERY_ARTICLES_KEY } from '@/constants/query.constant';
import queryClient from '@/queries/queryClient';
import { useDeleteArticleMutation } from '@/queries/articles.query';
import { useNavigate } from 'react-router-dom';

interface IButtonsWIthAccessProps {
  articleInfo: { [key: string]: any };
}

const ButtonsWIthAccess = ({ articleInfo }: IButtonsWIthAccessProps) => {
  const navigate = useNavigate();
  const deleteArticleMutation = useDeleteArticleMutation();

  const onDelete = (slug: string) => {
    deleteArticleMutation.mutate(
      { slug },
      {
        onSuccess: (_) => {
          queryClient.invalidateQueries({ queryKey: [QUERY_ARTICLES_KEY] });
          navigate(`/`);
        },
      },
    );
  };

  return (
    <>
      <button
        className="btn btn-sm btn-outline-secondary"
        type="button"
        onClick={() => navigate(`/editor/${articleInfo.slug}`, { state: articleInfo })}
      >
        <i className="ion-edit"></i>&nbsp; Edit Article
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-sm btn-outline-danger" type="button" onClick={() => onDelete(articleInfo.slug)}>
        <i className="ion-trash-a"></i>&nbsp; Delete Article
      </button>
    </>
  );
};

export default ButtonsWIthAccess;
