// import {rest} from 'msw'
// const publicKey = 'caa605ac9607a904ac4277866f4bbb23'
// const timeStamp = '1723536781813'
// const hashKey = 'ab47f2dac9b62b45e88ef8605f5d3adb'
// const limit=8
// const offset=0

// export const handlers=[
//     rest.get(`https://gateway.marvel.com:443/v1/public/comics?limit=${limit}&offset=${offset}&apikey=${publicKey}&ts=${timeStamp}&hash=${hashKey}`,(req,res,ctx)=>{
//         return res(
//             ctx.status(200),
//         ctx.json([
//             {
//                 thumbnail:'http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada',
//                 path:'.jpg',
//                 title:"Marvel Previews (2017)"
//             }
//         ])
//         )

//     })
// ]