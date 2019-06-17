import React from 'react';

class OneSmurf extends React.Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  sendChanges = e => {
    e.preventDefault()
    let newData = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    let id = this.props.match.params.id
    this.props.updateHandler(id, newData)
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render(){
    let singleSmurf = this.props.smurfs.find(obj => obj.id.toString() === this.props.match.params.id);
    return (
      <div className="Smurf">
        <h3>{singleSmurf.name}</h3>
        <strong>{singleSmurf.height} tall</strong>
        <p>{singleSmurf.age} smurf years old</p>
        
        <form>
          <input
            name = "name"
            value = {this.state.name}
            placeholder = "name"
            onChange = {this.handleInputChange} />
          <input
            name = "age"
            value = {this.state.age}
            placeholder = "age"
            onChange = {this.handleInputChange} />
          <input
            name = "height"
            value = {this.state.height}
            placeholder = "height"
            onChange = {this.handleInputChange} />
          <button onClick = {this.sendChanges}>Apply changes</button> 
        </form>
      </div>
    );
  }
};

export default OneSmurf;
