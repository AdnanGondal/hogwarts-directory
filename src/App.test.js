import {
  getByRole,
  queryAllByRole,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";

test("One plus one should equal two", () => {
  expect(1 + 1).toBe(2);
});

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Form from "./components/Form";
import Table from "./components/Table";

describe("App", () => {
  test("You can add a student", () => {
    render(<App />);

    const textInput = screen.getByRole("textbox");
    userEvent.type(textInput, "Adnan Gondal");
    const house = screen.getByRole("combobox");
    //console.log(house.value);
    //console.log(textInput.value);
    const but = screen.getByRole("button");
    userEvent.click(but);

    //screen.debug();

    expect(screen.queryAllByRole("row")).toHaveLength(6);
  });

  test("You can remove a student", () => {
    render(<App />);

    const removeButton = screen.queryAllByText("Delete");

    userEvent.click(removeButton[0]);

    expect(screen.queryAllByRole("row")).toHaveLength(4);
  });

  test("Validates correctly based upon incorrect information", () => {
    render(<App />);

    const textInput = screen.getByRole("textbox");
    userEvent.type(textInput, "");
    //console.log(house.value);
    //console.log(textInput.value);
    const but = screen.getByRole("button");
    userEvent.click(but);
    screen.debug();
    expect(screen.getByText("Error")).toBeInTheDocument();
  });
});

describe("Form", () => {
  test("renders Form component", () => {
    render(<Form />);
  });

  test("Form contains input", () => {
    render(<Form />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("Form contains button", () => {
    render(<Form />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    //screen.debug();
  });

  test("Form contains name label ", () => {
    render(<Form />);
    expect(screen.getByText("Name")).toBeInTheDocument();

    //screen.debug();
  });

  test("Form contains house label ", () => {
    render(<Form />);
    expect(screen.getByText("House")).toBeInTheDocument();

    //screen.debug();
  });

  test("All Hogwarts houses are present", () => {
    render(<Form />);

    const options = screen.getAllByRole("option");

    const house = [
      options[0].value,
      options[1].value,
      options[2].value,
      options[3].value,
      options[4].value,
    ];
    const actualHouses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

    expect(house).toEqual(expect.arrayContaining(actualHouses));
  });
});

describe("Table", () => {
  test("table has correct no of rows", () => {
    const students = [
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
    ];
    const table = <Table studentData={students} />;
    render(table);
    expect(screen.queryAllByRole("row")).toHaveLength(students.length + 1);
    // screen.debug();
  });
});
