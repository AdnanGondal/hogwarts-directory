import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.initialState = {
      student: {
        name: "",
        house: "Gryffindor",
      },
      showError: false,
    };
    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => {
      return {
        student: {
          ...prevState.student,
          [name]: value,
        },
      };
    });
  };

  submitForm = () => {
    if (this.validate()) {
      this.props.handleSubmit(this.state.student);
      this.setState(this.initialState);
    }
  };

  validate = () => {
    if (!this.state.student.name) {
      this.setState({ showError: true });
    } else return true;
  };

  render() {
    const { name, house } = this.state.student;
    const { showError } = this.state;

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
          {/* <input
            type="select"
            name="house"
            id="house"
            value={house}
            onChange={(e) => this.handleChange(e)}
          /> */}
          <select
            onChange={(e) => this.handleChange(e)}
            name="house"
            id="house"
            value={house}
          >
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
          </select>
        </form>
        <p className="error-message">
          {showError ? "Please enter an appropriate name" : " "}
        </p>
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
