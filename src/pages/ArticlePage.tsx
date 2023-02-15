import { convertToDate } from '@/lib/utils';
import { useGetArticleQuery } from '@/queries/articles.query';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ArticlePage = () => {
  const { state } = useLocation();
  const { data } = useGetArticleQuery(state);

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{data.title}</h1>

          <div className="article-meta">
            <a href="/">
              <img src={data.author.image} alt="comment-author" />
            </a>
            <div className="info">
              <a href="/" className="author">
                {data.author.username}
              </a>
              <span className="date">{convertToDate(data.updatedAt)}</span>
            </div>
            {data.author.following ? (
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-plus-round"></i>
                &nbsp; Follow {data.author.username} <span className="counter">(10)</span>
              </button>
            ) : (
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round"></i>
                &nbsp; Follow {data.author.username} <span className="counter">(10)</span>
              </button>
            )}
            &nbsp;&nbsp;
            {data.favorited ? (
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i>
                &nbsp; Favorite Post <span className="counter">{data.favoritesCount}</span>
              </button>
            ) : (
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-heart"></i>
                &nbsp; Favorite Post <span className="counter">{data.favoritesCount}</span>
              </button>
            )}
            <button className="btn btn-sm btn-outline-secondary" type="button">
              <i className="ion-edit"></i>&nbsp; Edit Article
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-danger" type="button">
              <i className="ion-trash-a"></i>&nbsp; Delete Article
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <ReactMarkdown children={data.body} remarkPlugins={[remarkGfm]}></ReactMarkdown>
          </div>
        </div>
        <div>
          {data.tagList.map((tag: string) => (
            <li key={tag} className="tag-default tag-pill tag-outline">
              tag
            </li>
          ))}
        </div>
        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href="profile.html">
              <img src={data.author.image} alt="profile" />
            </a>
            <div className="info">
              <a href="/" className="author">
                {data.author.username}
              </a>
              <span className="date">{convertToDate(data.updatedAt)}</span>
            </div>
            {data.author.following ? (
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-plus-round"></i>
                &nbsp; Follow {data.author.username} <span className="counter">(10)</span>
              </button>
            ) : (
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round"></i>
                &nbsp; Follow {data.author.username} <span className="counter">(10)</span>
              </button>
            )}
            &nbsp;&nbsp;
            {data.favorited ? (
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i>
                &nbsp; Favorite Post <span className="counter">{data.favoritesCount}</span>
              </button>
            ) : (
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-heart"></i>
                &nbsp; Favorite Post <span className="counter">{data.favoritesCount}</span>
              </button>
            )}
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

            {/* <div className="card">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
