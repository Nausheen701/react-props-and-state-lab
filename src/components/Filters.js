import React from 'react'

class Filters extends React.Component {



  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          {/* App should pass a callback prop, onChangeType, to <Filters />. 
          //  callback needs to update <App />'s state.filters.type */}
          <select name="type" id="type" onChange={this.props.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        {/* <Filters /> needs a callback prop, onFindPetsClick. When the <Filters /> 
        component calls onFindPetsClick, <App /> should fetch a list of pets 
        using fetch(). */}
        <div className="field">
          <button onClick={this.props.onFindPetsClick}
          className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
