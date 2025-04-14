import { useRevertArticleUpdateMutation } from '@/queries/articles.query';
import { useGetUserQuery } from '@/queries/user.query';
import useInputs from '@/lib/hooks/useInputs';
import queryClient from '@/queries/queryClient';
import { QUERY_ARTICLE_REVISIONS_KEY, QUERY_COMMENTS_KEY } from '@/constants/query.constant';
import convertToDate from '@/lib/utils/convertToDate';
import { IArticleRevision } from '@/interfaces/main';
import { useLocation, useNavigate } from 'react-router-dom';

interface IRevisionProps {
  revisionsInfo: {
    articlesRevisions: IArticleRevision[];
    articlesRevisionsCount: number;
  };
  slug: string;
}

const Revision = ({ revisionsInfo, slug }: IRevisionProps) => {
  const { articlesRevisions } = revisionsInfo;
  const revertArticleUpdateMutation = useRevertArticleUpdateMutation();
  const navigate = useNavigate();
  const onRevert = (slug: string, revision: number, newSlug: string) => {
    revertArticleUpdateMutation.mutate(
      { slug, revision },
      {
        onSuccess: (_) => {
          queryClient.invalidateQueries({ queryKey: [QUERY_ARTICLE_REVISIONS_KEY] });
          alert('Article reverted successfully!');
          navigate(`/article/${newSlug}`, { state: newSlug });
        },
      },
    );
  };
  return (
    <div className="container py-4">
      <h2 className="mb-4">Updates History</h2>
      {articlesRevisions.length === 0 ? (
        <div>Loading...</div>
      ) : (
        articlesRevisions?.map((revision, index) => (
          <div key={index} className="card mb-3">
            <div className="card-header">
              <h5>Update {revision.id}</h5>
              <p className="card-text">Date: {convertToDate(revision.createdAt)}</p>
            </div>
            <div className="card-body text-center">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Title</th>
                    <td>{revision.articleData.title}</td>
                  </tr>
                  <tr>
                    <th>Slug</th>
                    <td>{revision.articleData.slug}</td>
                  </tr>
                  <tr>
                    <th>Body</th>
                    <td>{revision.articleData.body}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>{revision.articleData.description}</td>
                  </tr>
                  <tr>
                    <th>Created At</th>
                    <td>{convertToDate(revision.articleData.createdAt)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={() => onRevert(slug, revision.id, revision.articleData.slug)}>
                Revert To This
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Revision;
