const ButtonsWIthAccess = () => {
  return (
    <>
      <button className="btn btn-sm btn-outline-secondary" type="button">
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
