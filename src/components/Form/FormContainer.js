import React from "react";

function FormContainer(props) {
  return (
    <div className="form-container">
      <h2 className="add-student">Add a student: </h2>
      <form className="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={props.student.name}
          placeholder="Hermione Granger"
          onChange={(e) => props.handleChange(e)}
        />
        <label htmlFor="house">House</label>
        <select
          onChange={(e) => props.handleChange(e)}
          name="house"
          id="house"
          value={props.student.house}
        >
          <option value={props.sortingHat()}>Sort Me!</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
      </form>
      <p className="error-message">{props.showError ? "Error" : " "}</p>
      <input
        className="submit-but"
        type="button"
        value="Submit"
        onClick={props.submitForm}
      />
    </div>
  );
}

export default FormContainer;
