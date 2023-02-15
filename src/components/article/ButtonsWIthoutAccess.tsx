interface IButtonsWIthoutAccessProps {
  articleInfo: { [key: string]: any };
}
const ButtonsWIthoutAccess = ({ articleInfo }: IButtonsWIthoutAccessProps) => {
  return (
    <>
      <button className={`btn btn-sm btn-outline-${articleInfo.author.following ? 'primary' : 'secondary'}`}>
        <i className="ion-plus-round"></i>
        &nbsp; Follow {articleInfo.author.username} <span className="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button className={`btn btn-sm btn-outline-${articleInfo.favorited ? 'primary' : 'secondary'}`}>
        <i className="ion-heart"></i>
        &nbsp; Favorite Post <span className="counter">{articleInfo.favoritesCount}</span>
      </button>
    </>
  );
};

export default ButtonsWIthoutAccess;
