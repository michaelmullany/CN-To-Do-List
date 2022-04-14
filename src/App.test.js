import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("test the add button", () => {
  test("one button available on load", () => {
    render(<App />);
    let element = screen.getAllByRole("button");
    expect(element.length).not.toBe(0);
  });
  
  test("one button available on load", () => {
    render(<App />);
    let element = screen.getAllByRole("button");
    expect(element.length).toBe(1);
  });
  
  
  test("one button available on load", () => {
    render(<App />);
    let element = screen.getAllByRole("button");
    expect(element.length).not.toBe(2);
  });
})

describe("input field", () => {
  test("there is an input field in the document", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  })
})

describe("test add task functionality", () => {
  test("more than zero headings initially", () => {
    render(<App />);
    let element = screen.getAllByRole("heading");
    expect(element.length).not.toBe(0);
  })
  
  test("one heading initially", () => {
    render(<App />);
    let element = screen.getAllByRole("heading");
    expect(element.length).toBe(1);
  })
  
  test("clicking the add button while the input is empty does not add a task", () => {
    render(<App />);
    const addButton = screen.getByText("Add Task");
    fireEvent.click(addButton);
    let element = screen.getAllByRole("heading");
    expect(element.length).toBe(1);
  })
  
  test("clicking the add button while the input has a value does add a task", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, {target: {value: "Task"}})
    const addButton = screen.getByText("Add Task");
    fireEvent.click(addButton);
    let element = screen.getAllByRole("heading");
    expect(element.length).toBe(2);
  })
})