var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateUser(user, updates) {
    console.log("user--", user);
    console.log("update--", updates);
    return __assign(__assign({}, user), updates);
}
var initialUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
};
var updatedUser = updateUser(initialUser, { name: 'can Doe' });
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
function pairArray(array) {
    var sortArray = array.sort();
    var pushArray = [];
    var checkpair = sortArray.map(function (e, i, arry) {
        if (e == arry[i]) {
            pushArray.push([e == arry[i]]);
        }
        // console.log("pushArray----",pushArray);
    });
    console.log("---checkpair", checkpair);
}
var arr = [20, 90, 30, 20, 30, 90, 70];
pairArray(arr);
