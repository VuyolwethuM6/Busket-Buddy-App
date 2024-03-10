import './CardItem.css';

const CardItem = () => {
  return (
    <div className="card-item">
      <div className="text">
        <h3>Apples</h3><br/>
        <small>3 x Red R9.00</small>
      </div>
      <div className="icons">
        <div className="icon">
          <img src="https://static.thenounproject.com/png/1416596-200.png" alt="edit" />
        </div>
        <div className="icon">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-delete-736-470378.png" alt="delete" />
        </div>
      </div>
    </div>
  );
}

export default CardItem;
