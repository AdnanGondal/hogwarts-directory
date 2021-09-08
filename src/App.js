import React from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import Header from "./components/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          name: "Harry Potter",
          house: "Gryffindor",
        },
        {
          name: "Ron Weasley",
          house: "Gryffindor",
        },
        {
          name: "Draco Malfoy",
          house: "Slytherin",
        },
        {
          name: "Cho Chang",
          house: "Ravenclaw",
        },
      ],
    };
  }

  removeStudent = (index) => {
    const { students } = this.state;

    this.setState({
      students: students.filter((student, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (student) => {
    this.setState({ students: [...this.state.students, student] });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Table
          studentData={this.state.students}
          removeStudent={this.removeStudent}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
