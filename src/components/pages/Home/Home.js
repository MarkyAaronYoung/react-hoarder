import React from 'react';

import ItemCard from '../../shared/ItemsCard';

import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';

class Home extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    itemsData.getItemsByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('get items broke', err));
  }

  render() {
    const { items } = this.state;

    const itemCard = items.map((item) => <ItemCard key={item.id} item={item}/>);

    return (
      <div className="Home">
        <h1>Home</h1>
        <div className="card-group">
          {itemCard}
        </div>
      </div>
    );
  }
}

export default Home;
