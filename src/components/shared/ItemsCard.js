import React from 'react';
import { Link } from 'react-router-dom';

import itemShape from '../../helpers/propz/itemShape';

const ItemCard = (props) => {
  const { item } = props;

  const editLink = `/edit/${item.id}`;

  return (
    <div className="col-3 mb-3">
      <div className="Item card border-0">
        <img className="card-img-top" src={item.itemImage} alt="horder"></img>
        <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
          <Link to={editLink} className="btn btn-dark"><i className="far fa-edit"></i></Link>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: itemShape.itemShape,
};

export default ItemCard;
