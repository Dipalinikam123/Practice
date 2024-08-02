import { fireEvent, render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

test('register form UI testing', () => {
    render(<RegisterForm />);

    // Check if the title is in the document
    expect(screen.getByText("RegisterForm")).toBeInTheDocument();

    // Check if the First Name input is in the document
    const fname=screen.getByLabelText(/First Name/i)
    fireEvent.change(fname,{target:{value:"dipali"}})
    expect(fname).toHaveValue("dipali");

    // Check if the Last Name input is in the document
    const lname=screen.getByLabelText(/Last Name/i)
    fireEvent.change(lname,{target:{value:"nikam"}})
    expect(lname).toHaveValue("nikam");

    // Check if the Gender label is in the document
    // expect(screen.getByText(/Gender/i)).toBeInTheDocument();

    // Check if the radio buttons are in the document
    const female=screen.getByRole('radio', { name: "Female" })
    const male=screen.getByRole('radio', { name: "Male" })
    fireEvent.click(female)
    expect(female.checked).toBe(true);
    expect(male.checked).toBe(false);

    const options = screen.getAllByRole('option')
    for (let i = 0; i < options.length; i++) {
        expect(options[i]).toBeInTheDocument()
    }
  // const submitbtn= screen.getByRole("button",{name:"Submit"})
    // fireEvent.click(submitbtn)
    // expect(fname.value).toBe('')
    // expect(lname.value).toBe('')
    // expect(female.value).toBe('')

    // expect(screen.getByText('Dipali')).toBeInTheDocument();
    // expect(screen.getByText('Nikam')).toBeInTheDocument();
    // expect(screen.getByText('Female')).toBeInTheDocument();
    // expect(screen.getByText('Madhya Pradesh')).toBeInTheDocument();
});
// test('onChange Inputs', () => {
//     const fname=screen.getByLabelText(/First Name/i);
//      expect(fname).toBeInTheDocument()
//      fireEvent.change(fname,{target:{value:"dipali"}})
// });

