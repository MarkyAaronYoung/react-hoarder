import React from 'react';

class EditStuff extends React.Component {
  render() {
    const { stuffId } = this.props.match.params;

    return (
      <div className="EditStuff">
        <h1>You are editing item: {stuffId} </h1>
      </div>
    );
  }
}

export default EditStuff;
