import { NextResponse } from 'next/server';


// export async function GET(req) {
//     //to get is use context in params or use {params}
//     // console.log("req--",req)

//     //heders
//     // const requestHeader= new Headers(req.headers)
//     // console.log("----headers",requestHeader)
//   return NextResponse.json({'msg':'hello next js'})   
// }


//third party api request from server

export async function GET(req) {
    const res = await fetch('https://gateway.marvel.com:443/v1/public/comics?apikey=caa605ac9607a904ac4277866f4bbb23&ts=1723536781813&hash=ab47f2dac9b62b45e88ef8605f5d3adb',
        {
            headers: {
                'Accept': 'application/json',
                'Referer': 'https://developer.marvel.com/'
            }
        })

    const comic = await res.json()
    return NextResponse.json({ 'data': comic })
}