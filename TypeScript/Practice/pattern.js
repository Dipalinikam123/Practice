// ========================================================================================================
 function pair(arr, n) {
    //  console.log("---arrr",arr);
    let sortArr = arr.sort()
    //  console.log("---sortArr",sortArr);


    let pairCheck = []

    for (let i = 0; i < sortArr.length - 1; i++) {
        // sortArr[i]=== sortArr[i+1]
        // console.log("----n",sortArr[i]=== sortArr[i+1]);
        // pairCheck.push( sortArr[i],sortArr[i+1]) [10,10,20,20,30,30]
        // console.log("---pairCheck1----s", sortArr[i]);
        // console.log("---pairCheck2", sortArr[i + 1]);

        if (sortArr[i] == sortArr[i + 1]) {
            pairCheck.push([sortArr[i], sortArr[i + 1]])
            console.log("--pairCheck",pairCheck);
            // console.log("count",pairCheck.length);
            n = pairCheck.length
            console.log("--count-", n);

        }
    }

    //  let pariNo=sortArr.map((e,i))
}
let array = [10, 20, 10, 20, 30, 30,60]

pair(array, 0) 

// ========================================================================================================
// *
// **
// ***
// ****
// *****

// function starPattern1(n) {
//     for(let i=1; i<=n;i++){
//         let row=" "
//         for(let j=1; j<=i;j++){
//             row =row + "* "
//         }
//         console.log(row);
//     }

// }
// starPattern1(5)

// function starPattern1(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = " "

//         for (let k = n; k > i; k--) {
//             row += " "
//         }

//         for (let j = 1; j <= i; j++) {
//             row += "* "
//         }
//         console.log(row);
//     }

// }
// starPattern1(5)

// function starPattern2(n) {
//     for (let i = n; i >= 1; i--) {
//         let row = " "

//         for (let j = 1; j <= i; j++) {
//             row += "* "
//         }
//         console.log(row);
//     }

// }
// starPattern2(5)


// function starPattern1(n) {
//     for (let i = n; i >= 1; i--) {
//         let row = " "
//         for(let k=n;k>i;k--)
//             row+=' '
//         for (let j = 1; j <= i; j++) {
//             row += "* "
//         }
//         console.log(row);
//     }

// }
// starPattern1(5)

