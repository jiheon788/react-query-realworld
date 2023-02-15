import { useNavigate } from 'react-router-dom';

interface IButtonsWIthAccessProps {
  articleInfo: { [key: string]: any };
}

const ButtonsWIthAccess = ({ articleInfo }: IButtonsWIthAccessProps) => {
  const navigate = useNavigate();
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
      <button className="btn btn-sm btn-outline-danger" type="button">
        <i className="ion-trash-a"></i>&nbsp; Delete Article
      </button>
    </>
  );
};

export default ButtonsWIthAccess;
