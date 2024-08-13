import React from 'react';
import { act, configure, fireEvent, logRoles, render, screen, within } from '@testing-library/react';
import App from './App';
import printHandler from './Practice/helper';
import FormComponant from './Practice/FormComponant';

import RegisterForm from './Practice/RegisterForm';
import CommentBox from './Practice/CommentBox/CommentBox';
import userEvent from "@testing-library/user-event"
import CommentList from './Practice/CommentBox/CommentList';
// import ClickEvent from './Practice/ClickEvent';
import Counter from './Practice/Counter';
import { AssertionMethod, GetAllByPlaceholderName, GetAllByRole, GetAllLableByText, GetByAlt, GetByPlaceholderName, GetByRole, GetByTestId, GetByText, GetByTitle, GetDisplayByValue, GetLableByText, MultipleElement, OverrideId } from './Practice/RTL/RTLQueried';
import { FindBy, QueryBy, TextMatch } from './Practice/RTL/TextMatch';
import { QueryingWithinEle, TestJsQuery } from './Practice/RTL/TestJsQuery';
import { ActFun, CallBackFun, ClickEvent, UserChangeEvent, UserClickEvent } from './Practice/RTL/UserEvent';
import {FunctionalProps, Props} from './Practice/RTL/Props';
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
// })

// ---------------------- snap shot -----------------------------

//   test("counter test",()=>{
//     const utils =render(<Counter/>);
//     expect(utils).toMatchSnapshot()

//   })

// -------------- describe , only & skip -----------------------------

// describe.only('group testing', () => {
//   test("UI counter testing", () => {
//     render(<Counter />)
//     logRoles(screen.getByTestId('count-test'))
//     const countDisplay = screen.getByTestId('count-test');
//     const checkInput = screen.getByRole("spinbutton")
//     const incBtn= screen.getByRole("button",{name:"Increment"})
//     const clsBtn=screen.getByRole("button",{name:"Clear"})

//     expect(checkInput).toBeInTheDocument();
//     expect(countDisplay).toBeInTheDocument();
//     expect(incBtn).toBeInTheDocument();
//     expect(clsBtn).toBeInTheDocument();
//   });

//   test('increment Button', () => {
//     render(<Counter />);
//     const checkInput = screen.getByRole('spinbutton');
//     const incBtn = screen.getByRole('button', { name: 'Increment' });

//     // Initially, the count should be 0
//     const countDisplay = screen.getByTestId('count-test');

//     expect(countDisplay).toHaveTextContent('Count:0');
//     // Change the input value to '5'
//     fireEvent.change(checkInput, { target: { value:'5'} });
//     expect(checkInput).toHaveValue(5)


//     // Verify that the initial count text is no longer present

//     // Click the Increment button
//     fireEvent.click(incBtn);

//     // Verify that the count has updated to 5
//     // screen.debug()
//     expect(screen.getByText(/Count:5/)).toBeInTheDocument();
//   });

//   test('Clear Button', () => {
//     render(<Counter />);
//     const inputElement = screen.getByRole('spinbutton');
//     const incBtn = screen.getByRole('button', { name: 'Increment' });
//     const clsBtn = screen.getByRole('button', { name: 'Clear' });
//     const countDisplay = screen.getByTestId('count-test');

//    // Set input value to '10'
//    fireEvent.change(inputElement, { target: { value: '10' } });
//    expect(inputElement).toHaveValue(10)


//    // Click Increment button
//    fireEvent.click(incBtn);

//    // Verify that the count is now 10
//    expect(countDisplay).toHaveTextContent('Count:10');

//    // Click Clear button
//    fireEvent.click(clsBtn);

//    // Verify that the count is reset to 0
//   //  screen.debug()

//    expect(countDisplay).toHaveTextContent('Count:0');
//  });

// // test("counter testing", () => {
// //   render(<Counter />)

// //   let checkInput = screen.getByRole("textbox")
// //   let checkPlaceholder = screen.getByPlaceholderText('Enter Number..!')
// //   let checkIncBtn= screen.getByText(/Increment/i);
// //   let checkClsBtn= screen.getByText(/Clear/i);
// //   let checkText= screen.getByText(/count:0/i);

// //   expect(checkText).toBeInTheDocument();
// //   expect(checkInput).toBeInTheDocument();
// //   expect(checkPlaceholder).toBeInTheDocument();
// //   expect(checkIncBtn).toBeInTheDocument()
// //   expect(checkInput).toHaveAttribute("type", "text");

// //   fireEvent.change(checkInput,{target:{value:'1'}});
// //   expect(checkInput.value).toBe('1');

// //   fireEvent.click(checkIncBtn)
// //   expect(screen.getByText).toEqual('1')

// //   fireEvent.click(checkClsBtn);
// //   expect(screen.getByText(/count:0/i)).toBeInTheDocument();

// //   // fireEvent.click(checkClsBtn)
// //   // expect(checkText).toBeInTheDocument()

// // })
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

// test('Initial  Comment box testing', () => {
//   render(<CommentBox />)
//   logRoles(screen.getByTestId("commentDiv"))
//   const inputField = screen.getByRole("textbox"); // access by role
//   expect(inputField).toBeInTheDocument()
//   const checkBox = screen.getByLabelText("I agree to terms and condition") //acces by lable
//   expect(checkBox).toBeInTheDocument()
//   const commetBtn = screen.getByRole("button", { name: 'Comment' }) // acees by role and name if multiple elements are same
//   expect(commetBtn).toBeDisabled()
// });

// test('Enable comment button on type and checked', async () => {
//   render(<CommentBox />)
//   const commentInput = screen.getByPlaceholderText("Type comment here") // access by Placeholder
//   const checkBox = screen.getByLabelText("I agree to terms and condition")
//   const commetBtn = screen.getByRole("button", { name: 'Comment' })



//   fireEvent.change(commentInput, {target:{value:"Anything"}})
//   fireEvent.click(checkBox)
//   expect(commetBtn).toBeEnabled()

//   fireEvent.click(checkBox)
//   expect(commetBtn).toBeDisabled()

//   // we can use user event library also but with that need to use async await
//   // await userEvent.type(commentInput, "Anything")

//   // await userEvent.click(checkBox)
//   // expect(commetBtn).toBeEnabled()

//   // await userEvent.click(checkBox)
//   // expect(commetBtn).toBeDisabled()


// });

// test('No Comment Testing ', () => {
//    render(<CommentList allComments={[]}/>)

//   logRoles(screen.getByTestId("commentListDiv"))

//    const h2Elements= screen.getByText('No Comments')
//    expect(h2Elements).toBeInTheDocument()
// });

// test('Comments list testing', () => {
//   const commentObj=[
//     {id:1, text:"Comment 1"},
//     {id:2, text:"Comment 2"},
//   ]
//  render(<CommentList allComments={commentObj}/>)


//   const h2Elements=screen.queryByText('No Comments')
//   expect(h2Elements).not.toBeInTheDocument()

//   const commentList=screen.getAllByRole("listitem")
//   expect(commentList.length).toBe(commentObj.length)

// });

// test('comment submit testing', async () => {
//    render(<App/>)
//    const commentInput = screen.getByPlaceholderText("Type comment here") // access by Placeholder
//    const checkBox = screen.getByLabelText("I agree to terms and condition")
//    const commetBtn = screen.getByRole("button", { name: 'Comment' })

//    await userEvent.type(commentInput,"hello")
//    await userEvent.click(checkBox)
//    await userEvent.click(commetBtn)


//    const listitems=screen.getByText("hello")
//    expect(listitems).toBeInTheDocument()

// });

// test('2 comment submit testing', async () => {
//    render(<App/>)
//    const commentInput = screen.getByPlaceholderText("Type comment here") // access by Placeholder
//    const checkBox = screen.getByLabelText("I agree to terms and condition")
//    const commetBtn = screen.getByRole("button", { name: 'Comment' })

//    await userEvent.type(commentInput,"hello")
//    await userEvent.click(checkBox)
//    await userEvent.click(commetBtn)


//    await userEvent.type(commentInput,"hii")
//    await userEvent.click(commetBtn)


//   const items = screen.getAllByRole('listitem')
//   expect(items.length).toBe(2)
// });

// ====================================================================================================================================

//  1. getBy 2. queryBy 3. findBy
// --------getByLableText----------------

describe.skip('getByRole', () => {
  test('for single getByRole', () => {
    render(<GetByRole />)
    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument();

    const checkBox = screen.getByRole("checkbox")
    expect(checkBox).toBeInTheDocument()

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  });

  test('for multiple getAllByrole', () => {
    render(<GetAllByRole />)
    logRoles(screen.getByTestId("slect"))
    const submitBtn = screen.getAllByRole('button')
    for (let i = 0; i < submitBtn.length; i++) {
      expect(submitBtn[i]).toBeInTheDocument()
    }
    const slectOption = screen.getAllByRole('option')
    for (let i = 0; i < slectOption.length; i++) {
      expect(slectOption[i]).toBeInTheDocument()
    }

  });
});

test('Multiple Elements', () => {
  render(<MultipleElement />)
  logRoles(screen.getByTestId("multiple"))
  const clsBtn = screen.getByRole('button', { name: "Clear" })
  expect(clsBtn).toBeInTheDocument()

  const submitBtn = screen.getByRole('button', { name: "Submit" })
  expect(submitBtn).toBeInTheDocument()

  const upBtn = screen.getByRole('button', { name: "Update" })
  expect(upBtn).toBeInTheDocument()

  const rmBtn = screen.getByRole('button', { name: "Remove" })
  expect(rmBtn).toBeInTheDocument()

  const female = screen.getByRole('radio', { name: "Female" })
  expect(female).toBeInTheDocument()
  const male = screen.getByRole('radio', { name: "Male" })
  expect(male).toBeInTheDocument()
});



describe.skip('getAllByLableText testing', () => {
  test('getByLableText', () => {
    render(<GetLableByText />)

    const input = screen.getByLabelText("Name")
    expect(input).toBeInTheDocument()

    const chechBox = screen.getByLabelText('CheckBox')
    expect(chechBox).toBeInTheDocument()
  });

  test('getAllByLableText', () => {
    render(<GetAllLableByText />)
    const input = screen.getAllByLabelText("Name")

    for (let i = 0; i < input.length; i++) {
      expect(input[i]).toBeInTheDocument()
      expect(input[i]).toHaveValue("abcd")

    }
  });
  test('2 getAllByLableText', () => {
    render(<GetAllLableByText />)
    const checkBoxs = screen.getAllByLabelText("CheckBox")

    for (let i = 0; i < checkBoxs.length; i++) {
      expect(checkBoxs[i]).toBeInTheDocument()
      expect(checkBoxs[i]).toBeChecked()
    }
  });
});

describe.skip('getByPlaceholder testing', () => {
  test('getByPlaceholder', () => {
    render(<GetByPlaceholderName />)
    const input = screen.getByPlaceholderText("Enter Your Name")
    expect(input).toBeInTheDocument()
  });

  test('getAllByPlaceholder', () => {
    render(<GetAllByPlaceholderName />)
    const inputs = screen.getAllByPlaceholderText("Enter Name")
    for (let i = 0; i < inputs.length; i++) {
      expect(inputs[i]).toBeInTheDocument()
    }
  });

});

describe.skip('getByText testing', () => {
  test('getByText', () => {
    render(<GetByText />)
    const hTag = screen.getByText("Heading...")
    expect(hTag).toBeInTheDocument()
    const pTag = screen.getByText("Lorem ipsum dolor sit amet consectetur.")
    expect(pTag).toBeInTheDocument()
    expect(pTag).toHaveClass("paraStyle") //to check that class is exist or not
    expect(pTag).toHaveAttribute('id', 'p1')
    const btn = screen.getByText("Login")
    expect(btn).toBeInTheDocument()
  });

  test('getAllBytext', () => {
    render(<GetByText />)

    const hedings = screen.getAllByText("Lorem, ipsum dolor.")
    for (let i = 0; i < hedings.length; i++) {
      expect(hedings[i]).toBeInTheDocument()
    }

  });

});


describe.skip('getByTestId testing', () => {
  test('getByTestId', () => {
    render(<GetByTestId />)
    const testid = screen.getByTestId("divtest")
    expect(testid).toBeInTheDocument()
  });
  test('getAllByTestId', () => {
    render(<GetByTestId />)
    const checkId = screen.getAllByTestId("test-div")
    for (let i = 0; i < checkId.length; i++)
      expect(checkId[i]).toBeInTheDocument()
  });
  //----- id override------
  // configure({ testIdAttribute: 'id' }); 
  // test('override id', () => {
  //   render(<OverrideId/>)
  //   const testDiv = screen.getByTestId('test-div-override');
  //   expect(testDiv).toBeInTheDocument();
  // });
});
test('getByTestId', () => {
  render(<GetDisplayByValue />)
  const input = screen.getByDisplayValue("purvi")
  expect(input).toBeInTheDocument()

  const textArea = screen.getByDisplayValue('manisha')
  expect(textArea).toBeInTheDocument()
  const radio = screen.getByDisplayValue('male')
  expect(radio).toBeInTheDocument()

  // if multiple value then use getAllByDisplayValue
});

test('getByTitle', () => {
  // -- to check icon or span tag --
  render(<GetByTitle />)
  const title = screen.getByTitle('click')
  expect(title).toBeInTheDocument()

  const iconSpan = screen.getByTitle("black-tash")
  expect(iconSpan).toBeInTheDocument()

  // for mutliple use getAllByTitle
});

test('getByAltText', () => {
  render(<GetByAlt />)
  const altText = screen.getByAltText('img not found')
  expect(altText).toBeInTheDocument()
  // for multple use getAllByAltText
});

describe.skip('Assertion method', () => {
  test('Possitive Assertion method', () => {
    render(<AssertionMethod />)
    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue()
    expect(input).toHaveValue("neha")
    expect(input).toHaveAttribute('id')
    expect(input).toHaveClass("dummy")
  });

  test('Negative assertion method', () => {
    render(<AssertionMethod />)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).not.toHaveAttribute('id')
    expect(button).not.toHaveClass()
    expect(button).not.toBeDisabled()
  });
});

test('TextMatch', () => {
  render(<TextMatch />)
  // ---with string
  // const textmatch= screen.getByText("hello world",{exact:false})
  // const textmatch= screen.getByText("Hello world")
  // expect(textmatch).toBeInTheDocument()

  // ----with regex
  // const textmatch= screen.getByText(/hello world/i)
  // const textmatch= screen.getByText(/lo wor/i)
  // expect(textmatch).toBeInTheDocument()

  // -----with Function
  // const textmatch= screen.getByText((content,elememt)=>content.includes("Hello"))
  // const textmatch= screen.getByText((content,elememt)=>content.startsWith("Hello"))
  const textmatch = screen.getByText((content, elememt) => content.length === 11)
  expect(textmatch).toBeInTheDocument()
});

// to check hide element
test('QueryBy', () => {
  render(<QueryBy />)
  // const button= screen.getByText("Logout") //failed becuase this text is absence/ hide in dom
  const button = screen.queryByText("Logout")
  expect(button).not.toBeInTheDocument()
});

test('FindBy', async () => { //findby default run time is 1000ms so we ned to set time 
  render(<FindBy />)
  const findby = await screen.findByText("Data Found", {}, { timeout: 4000 }) //limit 5000
  expect(findby).toBeInTheDocument()
});

test('Test with js Query/ custom query', () => {
  render(<TestJsQuery />)
  const customId = document.querySelector("#div-id")
  expect(customId).toBeInTheDocument()
  expect(customId).toHaveTextContent("TestJsQuery")
  expect(customId).toHaveAttribute("id")

  const customId2 = document.querySelector(".class-id")
  expect(customId2).toBeInTheDocument()
  expect(customId2).toHaveTextContent("Hello, purvi")
  expect(customId2).toHaveAttribute("class")
});

test('Test child Ele with parent Ele using Within', () => {
  render(<QueryingWithinEle />)
  const parentEle = screen.getByText("hello world")
  const childEle = within(parentEle).getByText("hii")
  const childEle2 = within(parentEle).getByText("bye")
  const childEle3 = within(parentEle).getByText("see you")
  expect(parentEle).toBeInTheDocument()
  expect(childEle).toBeInTheDocument()
  expect(childEle2).toBeInTheDocument()
  expect(childEle3).toBeInTheDocument()
});

describe('User Event', () => {
  test('User click Event', async () => {
    render(<UserClickEvent />)
    const btn = screen.getByRole("button")
    expect(btn).toBeInTheDocument()

    await userEvent.click(btn)
    expect(screen.getByText("Hello")).toBeInTheDocument()

  });
  test('User onChange Event', async () => {
    render(<UserChangeEvent />)
    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()

    await userEvent.type(input, "abcd")
    expect(screen.getByText("abcd")).toBeInTheDocument()
  });
  test('act function', async () => {
    render(<ActFun />)
    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()

    await act(async () => {
      await userEvent.type(input, "abcd")
    })
    expect(screen.getByText("abcd")).toBeInTheDocument()
  });
});

describe('Props Testing', () => {
  test('Normal Name Props ', () => {
    const name="neha"
    render(<Props name={name}/>)
    const user= screen.getByText(`My Name is:${name}`)
    expect(user).toBeInTheDocument()
  });
  
});

test('Functional Prop', async () => {
  const mockFunction = jest.fn();   
  render(<FunctionalProps mockFunction={mockFunction}/>)
  const btn =screen.getByRole("button")

  await userEvent.click(btn)
  expect(mockFunction).toHaveBeenCalled()
});

test('renders text after timeout', async () => {
  render(<CallBackFun />);

  // Wait for the elements to appear with a timeout of 4000ms
  const fname = await screen.findByText(/dipali/, {}, { timeout: 4000 });
  const lname = await screen.findByText(/nikam/, {}, { timeout: 4000 });

  // Assert that the elements are in the document
  expect(fname).toBeInTheDocument();
  expect(lname).toBeInTheDocument();
});