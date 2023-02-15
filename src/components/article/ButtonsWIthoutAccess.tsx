interface IButtonsWIthoutAccessProps {
  articleInfo: { [key: string]: any };
}
const ButtonsWIthoutAccess = ({ articleInfo }: IButtonsWIthoutAccessProps) => {
  return (
    <>
      {articleInfo.author.following ? (
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-plus-round"></i>
          &nbsp; Follow {articleInfo.author.username} <span className="counter">(10)</span>
        </button>
      ) : (
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round"></i>
          &nbsp; Follow {articleInfo.author.username} <span className="counter">(10)</span>
        </button>
      )}
      &nbsp;&nbsp;
      {articleInfo.favorited ? (
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart"></i>
          &nbsp; Favorite Post <span className="counter">{articleInfo.favoritesCount}</span>
        </button>
      ) : (
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-heart"></i>
          &nbsp; Favorite Post <span className="counter">{articleInfo.favoritesCount}</span>
        </button>
      )}
    </>
  );
};

export default ButtonsWIthoutAccess;
