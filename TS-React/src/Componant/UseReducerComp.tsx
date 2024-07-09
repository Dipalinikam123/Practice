import React, { useReducer } from "react";

// Define action types
type ActionType = "INC" | "DEC";

// function reducer(state: number, action: ActionType): number {
//   if (action === "INC") {
//     return state + 1;
//   } else if (action === "DEC") {
//     return state - 1;
//   } else {
//     return state;
//   }
// }

// export const UseReducerComp: React.FC = () => {
//   const [count, dispatch] = useReducer(reducer, 0);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button className="border w-20 mb-3" onClick={() => dispatch("INC")}>
//         Inc
//       </button>
//       <button className="border w-20 " onClick={() => dispatch("DEC")}>
//         Dec
//       </button>
//     </>
//   );
// };

// ---------------------------------------------------------------------

interface State {
    number: number;
  }

function reducer(state: State, action: ActionType):State {
    console.log("---state",state);
    console.log("---action",action);
 switch (action) {
    case 'INC':
        return {number:state.number+1}
    case 'DEC':
        return {number:state.number-1}
        
 
    default:
        return state;
 }
}

const initialState:State={ number: 0 }
export const ReducerCom:React.FC = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{counter?.number}</h1>
      <button className="border w-20 mb-3" onClick={() => dispatch("INC")}>
        Inc
      </button>
      <button className="border w-20 " onClick={() => dispatch("DEC")}>
        Dec
      </button>
    </>
  );
};
