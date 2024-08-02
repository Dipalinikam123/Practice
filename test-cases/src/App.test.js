import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import printHandler from './Practice/helper';
import FormComponant from './Practice/FormComponant';
import MultipleElement from './Practice/MultipleElement';



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


// --------------- Event & Input --------------------------------
  
// ---------------- click Event ---------------------------------
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

// -------------- describe , only & skip -----------------------------

// describe.only('group testing', () => {
//   test("11 counter testing", () => {
//     render(<Counter />)
//     let checkInput = screen.getByRole("textbox")
//     let checkPlaceholder = screen.getByPlaceholderText('Enter Number..!')
//     expect(checkInput).toBeInTheDocument()
//     expect(checkPlaceholder).toBeInTheDocument()
//   });

  
// test('22 renders learn react link', () => {
//   render(<App />);
//   const text = screen.getByText(/first react test case/i);
//   expect(text).toBeInTheDocument();
// });

// });

// describe.skip('group testing123', () => {
//   test("api counter testing", () => {
//     render(<Counter />)
//     let checkInput = screen.getByRole("textbox")
//     let checkPlaceholder = screen.getByPlaceholderText('Enter Number..!')
//     expect(checkInput).toBeInTheDocument()
//     expect(checkPlaceholder).toBeInTheDocument()
//   });

  
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

//   test("counter test",()=>{
//     const utils =render(<Counter/>);
//     expect(utils).toMatchSnapshot()

//   })
  

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

  // -----------------------Form Componant--------------------------------------------

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
  
// ============================================================================================================================================

// -------------------------------getByRole---------------------------


test('Multiple same elememt', () => {
  render(<MultipleElement/>)

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
});

