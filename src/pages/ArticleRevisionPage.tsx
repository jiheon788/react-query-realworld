import { useGetArticleRevisionsQueries, useGetArticleQueries } from '@/queries/articles.query';
import { Link, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ButtonSelector from '@/components/article/ButtonSelector';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContextProvider';
import Revision from '@/components/article/Revision';
import routerMeta from '@/lib/routerMeta';
import convertToDate from '@/lib/utils/convertToDate';

const ArticleRevisionPage = () => {
  const { state } = useLocation();
  const [revisionInfo] = useGetArticleRevisionsQueries(state.slug);

  const { isLogin } = useContext(UserContext);
  console.log(state);
  console.log(revisionInfo);

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{state.title}</h1>

          <div className="article-meta">
            <Link to={`/profile/${state.author.username}`} state={state.author.username}>
              <img src={state.author.image} alt="comment-author" />
            </Link>

            <div className="info">
              <Link to={`/profile/${state.author.username}`} state={state.author.username} className="author">
                {state.author.username}
              </Link>
              <span className="date">{convertToDate(state.updatedAt)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <ReactMarkdown children={state.body} remarkPlugins={[remarkGfm]}></ReactMarkdown>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <Link to={`/profile/${state.author.username}`} state={state.author.username}>
              <img src={state.author.image} alt="profile" />
            </Link>
            <div className="info">
              <Link to={`/profile/${state.author.username}`} state={state.author.username} className="author">
                {state.author.username}
              </Link>
              <span className="date">{convertToDate(state.updatedAt)}</span>
            </div>
            {/* {isLogin ? <ButtonSelector articleInfo={state} /> : <></>} */}
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            {isLogin ? (
              <Revision revisionsInfo={revisionInfo.data} slug={state.slug} />
            ) : (
              <p>
                <Link to={routerMeta.SignInPage.path}>Sign in</Link>
                &nbsp;or&nbsp;
                <Link to={routerMeta.SignUpPage.path}>Sign up</Link>
                &nbsp;to add comments on this article.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleRevisionPage;
