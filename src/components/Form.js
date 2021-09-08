import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.initialState = {
      name: "",
      house: "",
    };
    this.state = {
      name: "",
      house: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    if (this.validate()) {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
  };

  validate = () => {
    if (!this.state.name) {
      // Could potentially add DOM element to show error.
      alert("Name is required. ");
    } else return true;
  };

  render() {
    const { name, house } = this.state;

    return (
      <div className="form-container">
        <form className="form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Hermione Granger"
            onChange={(e) => this.handleChange(e)}
          />
          <label htmlFor="house">House</label>
          <input
            type="text"
            name="house"
            id="house"
            value={house}
            onChange={(e) => this.handleChange(e)}
          />
        </form>
        <input
          className="submit-but"
          type="button"
          value="Submit"
          onClick={this.submitForm}
        />
      </div>
    );
  }
}

export default Form;
