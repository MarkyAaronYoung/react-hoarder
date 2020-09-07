import React from 'react';

class SingleStuff extends React.Component {
  render() {
    const { stuffId } = this.props.match.params;

    return (
      <div className="SingleStuff">
        <h1>Single Stuff {stuffId}</h1>
      </div>
    );
  }
}

export default SingleStuff;
