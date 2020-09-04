import React from 'react';

class MyStuff extends React.Component {
  editStuffEvent = (e) => {
    e.preventDefault();
    const stuffId = 'item1000';
    this.props.history.push(`/edit/${stuffId}`);
  }

  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <button className="btn btn-dark" onClick={this.editStuffEvent}>Edit</button>
        <button className="btn btn-dark">Single</button>
      </div>
    );
  }
}

export default MyStuff;
