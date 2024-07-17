interface User {
    id: number;
    name: string;
    email: string;
}


function updateUser(user: User, updates: Partial<User>): User {
    console.log("user--",user);
    console.log("update--",updates);
    return { ...user, ...updates};
}

const initialUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
};


const updatedUser = updateUser(initialUser, { name: 'can Doe' });
console.log(updatedUser);

// function pair(arr:number [], n:number) {
//     //  console.log("---arrr",arr);
//     let sortArr = arr.sort()
//     //  console.log("---sortArr",sortArr);
//     let pairCheck = []
//     for (let i:number = 0; i < sortArr.length - 1; i++) {
//         // sortArr[i]=== sortArr[i+1]
//         // console.log("----n",sortArr[i]=== sortArr[i+1]);
//         // pairCheck.push( sortArr[i],sortArr[i+1]) [10,10,20,20,30,30]
//         // console.log("---pairCheck1----s", sortArr[i]);
//         // console.log("---pairCheck2", sortArr[i + 1]);

//         if (sortArr[i] == sortArr[i + 1]) {
//             pairCheck.push([sortArr[i], sortArr[i + 1]])
//             console.log("--pairCheck",pairCheck);
//             // console.log("count",pairCheck.length);
//             n = pairCheck.length
//             console.log("--count-", n);

//         }
//     }

//     //  let pariNo=sortArr.map((e,i))
// }
// let array = [10, 20, 10, 20, 30, 30,60]

// pair(array, 0) 


function pairArray (array:number []){
const sortArray= array.sort()
const pushArray=[]
const checkpair= sortArray.map((e,i,arry)=>{
    if(e==arry[i]){
      pushArray.push([e==arry[i]])

    }
    // console.log("pushArray----",pushArray);

})

console.log("---checkpair",checkpair);
}

let arr:number[]= [20,90,30,20,30,90,70]
pairArray(arr)