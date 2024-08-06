import React from 'react';
import { fireEvent, getAllByRole, getByText, logRoles, render, screen } from '@testing-library/react';
import App from './App';
import printHandler from './Practice/helper';
import FormComponant from './Practice/FormComponant';
import MultipleElement from './Practice/MultipleElement';
import RegisterForm from './Practice/RegisterForm';
import CommentBox from './Practice/CommentBox/CommentBox';
import userEvent from "@testing-library/user-event"
import CommentList from './Practice/CommentBox/CommentList';


// --------simple componant testing ---------------------------

// test('renders learn react link', () => {
//   render(<App />);
//   const text = screen.getByText(/first react test case/i);
//   const text2 = screen.getByText(/purvi/i);
//   const title = screen.getByTitle(/React image/i);
//   expect(text).toBeInTheDocument();
//   expect(text2).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
// });

// ==============================sum===============================

// import sum from './sum';


//   test('adds 10 + 20 to equal 30', () => {
//     let a=10;
//     let b=20;
//     let output=30
//     expect(sum(a, b)).toBe(output);
//   });

// ==============================ClickEvent===================================================
// ---------------- click Event /Event & Input---------------------------------
// test('click event', () => {
//   render(<ClickEvent/>)

//   const button= screen.getByText(/Click/i);
//   const message= screen.getByText(/hello/i)
//   // expect(button).toBeInTheDocument()
//   expect(message).toBeInTheDocument()
//   fireEvent.click(button)
//   expect(screen.getByText(/world/i)).toBeInTheDocument()
// });

// test("function click event",()=>{
//   render(<ClickEvent/>)
//   const btn =screen.getByTestId("btn1")
//   fireEvent.click(btn)
//   expect(screen.getByText("World")).toBeInTheDocument()
// })




// test('22 renders learn react link', () => {
//   render(<App />);
//   const text = screen.getByText(/first react test case/i);
//   expect(text).toBeInTheDocument();
// });

// });



// test('api renders learn react link', () => {
//   render(<App />);
//   const text = screen.getByText(/first react test case/i);
//   expect(text).toBeInTheDocument();
// });

// });

// ----------------- beforeAll , beforeEach & afterAll , afterEach ----------------

// beforeAll(()=>{
//   console.log("=====before all =======");
// })
// beforeEach(() => {
//   console.log("====before Each====");
// });

// test('1 renders learn react link', () => {
//   console.log("1");
//   render(<App />);
//   const text = screen.getByText(/first react test case/i);
//   expect(text).toBeInTheDocument();
// });

// test('2 renders learn react link', () => {
//   console.log("2");
//   render(<App />);
//   const text = screen.getByText(/first react test case/i);
//   expect(text).toBeInTheDocument();

// });

// afterEach(() => {
//   console.log("======afterEach======");
// });
// afterAll(() => {
//   console.log("======afterAll======");
// });
// ---------------------- snap shot -----------------------------
// test('learn react link 1', () => {
//    const view  = render(<App />);
//    expect(view).toMatchSnapshot();

//   });
// ==============================Counter==================================================

// describe.skip('group testing123', () => {
//   test("api counter testing", () => {
//     render(<Counter />)
//     let checkInput = screen.getByRole("textbox")
//     let checkPlaceholder = screen.getByPlaceholderText('Enter Number..!')
//     expect(checkInput).toBeInTheDocument()
//     expect(checkPlaceholder).toBeInTheDocument()
//   });


// ---------------------- snap shot -----------------------------

//   test("counter test",()=>{
//     const utils =render(<Counter/>);
//     expect(utils).toMatchSnapshot()

//   })

// -------------- describe , only & skip -----------------------------

// describe.only('group testing', () => {
//   test("11 counter testing", () => {
//     render(<Counter />)
//     let checkInput = screen.getByRole("textbox")
//     let checkPlaceholder = screen.getByPlaceholderText('Enter Number..!')
//     expect(checkInput).toBeInTheDocument()
//     expect(checkPlaceholder).toBeInTheDocument()
//   });


// test("counter testing", () => {
//   render(<Counter />)

//   let checkInput = screen.getByRole("textbox")
//   let checkPlaceholder = screen.getByPlaceholderText('Enter Number..!')
//   // let checkIncBtn= screen.getByText(/Increment/i);
//   let checkClsBtn= screen.getByText(/Clear/i);
//   let checkText= screen.getByText(/count:0/i);

//   expect(checkText).toBeInTheDocument();
//   expect(checkInput).toBeInTheDocument();
//   expect(checkPlaceholder).toBeInTheDocument();
//   expect(checkInput).toHaveAttribute("type", "text");

//   fireEvent.change(checkInput,{target:{value:'0'}});
//   expect(checkInput.value).toBe('0');

//   fireEvent.click(checkClsBtn);
//   // expect(screen.getByText(/count:0/i)).toBeInTheDocument();

//   fireEvent.click(checkClsBtn)
//   expect(checkText).toBeInTheDocument()

// })


// ==============================ClassComp===================================================
// test("class componant",()=>{
//   const classComponant= renderer.create(<ClassComp/>).getInstance()
//   // console.log(classComponant);
//   const a='purvi Manisha';
//   expect(classComponant.getUserList(a)).toMatch(a)
// })


// describe.each([
//   [1, 1, 2],
//   [1, 2, 3],
//   [2, 1, 3],
// ])('.add(%i, %i)', (a, b, expected) => {
//   test(`returns ${expected}`, () => {
//     expect(a + b).toBe(expected);
//   });

//   test(`returned value not be greater than ${expected}`, () => {
//     expect(a + b).not.toBeGreaterThan(expected);
//   });

//   test(`returned value not be less than ${expected}`, () => {
//     expect(a + b).not.toBeLessThan(expected);
//   });
// });

// ==============================Form Componant===================================================

// test('check submit button', () => {
//   render(<FormComponant/>);

//   // Get the name input field
//   const nameInput = screen.getByRole('textbox', { name: /name:/i });

//   // Simulate typing into the name input field
//   fireEvent.change(nameInput, { target: { value: 'john' } });

//   // Get the submit button
//   const submitButton = screen.getByRole('button', { name: /submit/i });

//   // Simulate a click on the submit button
//   fireEvent.click(submitButton);

//   // Check that the submitted data is displayed
//   expect(screen.getByText(/Submitted Data:/i)).toBeInTheDocument();
//   expect(screen.getByText(/name: john/i)).toBeInTheDocument();

//   const clearButton =screen.getByRole('button',{name:/clear/i})
//   fireEvent.click(clearButton)
//   expect(screen.queryByText(/Submitted Data:/i)).not.toBeInTheDocument()

// Remove the line checking for age as it's no longer part of the form
// expect(screen.getByText(/age: 25/i)).toBeInTheDocument();
// });

// test('check clear button', () => {

//     fireEvent.click(screen.getByTestId("btn2"))

//     expect(screen.getByLabelText(/name:/i)).toHaveValue('')
//     expect(screen.getByLabelText(/age:/i)).toHaveValue('')

// });
// ========================FunctionalMethod======================================================
// ------------------function com method testing-------------------
// test('method testing 1', () => {
//   render(<FunctionalMethod/>)

//   const btn = screen.getByTestId("btn1")
//   fireEvent.click(btn)
//   expect(screen.getByText("hello")).toBeInTheDocument();
// });

// test('method testing 2', () => {
//   expect(printHandler()).toMatch("hii")
// });

// =================================MultipleElement==========================================================

// --------getByRole---------
// test('Multiple same elememt', () => {
//   render(<MultipleElement />)

// getByRole
// const btn1= screen.getByRole("button",{name:"click Me 1"})
// expect(btn1).toBeInTheDocument()
// expect(screen.getByRole("button",{name:"click Me 2"})).toBeInTheDocument()

// expect(screen.getByRole("textbox",{name:"Name"})).toBeInTheDocument()
// expect(screen.getByRole("textbox",{name:"Age"})).toBeInTheDocument()

// expect(screen.getByRole("dummy")).toBeInTheDocument()

// getAllByRole 
//Note--- getAllByRole Query return an array..

// const btns= screen.getAllByRole('button')

// for (let i = 0; i < btns.length-1; i++) {
//   expect(btns[i]).toBeInTheDocument()
// }


//   const options =screen.getAllByRole('option')

//   for (let a = 0; a < options.length-1; a++) {
//     expect(options[a]).toBeInTheDocument()
//   }
// });


// ===============================RegisterForm ======================================


// test('register form UI testing', () => {
//     render(<RegisterForm />);
//     logRoles(screen.getByTestId("myRootDiv"))

//     // Check if the title is in the document
//     expect(screen.getByText("RegisterForm")).toBeInTheDocument();

//     // Check if the First Name input is in the document
//     const fname=screen.getByLabelText(/First Name/i)
//     fireEvent.change(fname,{target:{value:"dipali"}})
//     expect(fname).toHaveValue("dipali");

//     // Check if the Last Name input is in the document
//     const lname=screen.getByLabelText(/Last Name/i)
//     fireEvent.change(lname,{target:{value:"nikam"}})
//     expect(lname).toHaveValue("nikam");

//     // Check if the Gender label is in the document
//     // expect(screen.getByText(/Gender/i)).toBeInTheDocument();

//     // Check if the radio buttons are in the document
//     const female=screen.getByRole('radio', { name: "Female" })
//     const male=screen.getByRole('radio', { name: "Male" })
//     fireEvent.click(female)
//     expect(female.checked).toBe(true);
//     expect(male.checked).toBe(false);

//     const options = screen.getAllByRole('option')
//     for (let i = 0; i < options.length; i++) {
//         expect(options[i]).toBeInTheDocument()
//     }
// const submitbtn= screen.getByRole("button",{name:"Submit"})
// fireEvent.click(submitbtn)
// expect(fname.value).toBe('')
// expect(lname.value).toBe('')
// expect(female.value).toBe('')

// expect(screen.getByText('Dipali')).toBeInTheDocument();
// expect(screen.getByText('Nikam')).toBeInTheDocument();
// expect(screen.getByText('Female')).toBeInTheDocument();
// expect(screen.getByText('Madhya Pradesh')).toBeInTheDocument();
// });
// test('onChange Inputs', () => {
//     const fname=screen.getByLabelText(/First Name/i);
//      expect(fname).toBeInTheDocument()
//      fireEvent.change(fname,{target:{value:"dipali"}})
// });


// =======================CommentBox====================================

test('Initial  Comment box testing', () => {
  render(<CommentBox />)
  logRoles(screen.getByTestId("commentDiv"))
  const inputField = screen.getByRole("textbox"); // access by role
  expect(inputField).toBeInTheDocument()
  const checkBox = screen.getByLabelText("I agree to terms and condition") //acces by lable
  expect(checkBox).toBeInTheDocument()
  const commetBtn = screen.getByRole("button", { name: 'Comment' }) // acees by role and name if multiple elements are same
  expect(commetBtn).toBeDisabled()
});

test('Enable comment button on type and checked', async () => {
  render(<CommentBox />)
  const commentInput = screen.getByPlaceholderText("Type comment here") // access by Placeholder
  const checkBox = screen.getByLabelText("I agree to terms and condition")
  const commetBtn = screen.getByRole("button", { name: 'Comment' })



  fireEvent.change(commentInput, {target:{value:"Anything"}})
  fireEvent.click(checkBox)
  expect(commetBtn).toBeEnabled()

  fireEvent.click(checkBox)
  expect(commetBtn).toBeDisabled()

  // we can use user event library also but with that need to use async await
  // await userEvent.type(commentInput, "Anything")

  // await userEvent.click(checkBox)
  // expect(commetBtn).toBeEnabled()

  // await userEvent.click(checkBox)
  // expect(commetBtn).toBeDisabled()


});

test('No Comment Testing ', () => {
   render(<CommentList allComments={[]}/>)

  logRoles(screen.getByTestId("commentListDiv"))

   const h2Elements= screen.getByText('No Comments')
   expect(h2Elements).toBeInTheDocument()
});

test('Comments list testing', () => {
  const commentObj=[
    {id:1, text:"Comment 1"},
    {id:2, text:"Comment 2"},
  ]
 render(<CommentList allComments={commentObj}/>)


  const h2Elements=screen.queryByText('No Comments')
  expect(h2Elements).not.toBeInTheDocument()

  const commentList=screen.getAllByRole("listitem")
  expect(commentList.length).toBe(commentObj.length)

});

// test('comment submit testing', async () => {
//    render(<App/>)
//    const commentInput = screen.getByPlaceholderText("Type comment here") // access by Placeholder
//    const checkBox = screen.getByLabelText("I agree to terms and condition")
//    const commetBtn = screen.getByRole("button", { name: 'Comment' })

//    await userEvent.type(commentInput,"hello")
//    await userEvent.click(checkBox)
//    await userEvent.click(commetBtn)
 

//   //  const listitems=screen.getByText("hello")
//   //  expect(listitems).toBeInTheDocument()

// });

test('2 comment submit testing', async () => {
   render(<App/>)
   const commentInput = screen.getByPlaceholderText("Type comment here") // access by Placeholder
   const checkBox = screen.getByLabelText("I agree to terms and condition")
   const commetBtn = screen.getByRole("button", { name: 'Comment' })

   await userEvent.type(commentInput,"hello")
   await userEvent.click(checkBox)
   await userEvent.click(commetBtn)


   await userEvent.type(commentInput,"hii")
   await userEvent.click(commetBtn)


  const items = screen.getAllByRole('listitem')
  expect(items.length).toBe(2)
});