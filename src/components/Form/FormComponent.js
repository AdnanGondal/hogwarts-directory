import React from "react";
import FormContainer from "./FormContainer";

class FormComponent extends React.Component {
  constructor() {
    super();
    this.initialState = {
      student: {
        name: "",
        house: this.sortingHat(),
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

  sortingHat = () => {
    const items = ["Gryffindor", "Slytherin", "Hufflepuff", "Raveclaw"];
    return items[Math.floor(Math.random() * items.length)];
  };

  render() {
    return (
      <FormContainer
        {...this.state}
        sortingHat={this.sortingHat}
        validate={this.validate}
        submitForm={this.submitForm}
        handleChange={this.handleChange}
      />
    );
  }
}

export default FormComponent;
