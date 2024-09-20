// import axios from "axios";
// import { useState } from "react";

// export default function Login() {
//   const [user, setUser] = useState({ email: "", password: "" });

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     axios({
//       method: "post",
//       url: "http://localhost:9999/user/signin",
//       data: user,
//     })
//       .then((res) => {
//         console.log("🚀 ~ handleSubmit ~ res:", res);
//         setCookies("user", res?.data?.data);
//         setCookies("token", res?.data?.token);
//         toggle();
//         setUser({ email: "", password: "" });
//         if (res?.data?.data?.userType === "admin") navigate("/dashboard");
//         else navigate("/");
//         dispatch(fetchApiCart(res?.data?.token));
//       })
//       .catch((err) => {
//         toast.error(err.response.data, {
//           autoClose: 1000,
//         });
//       });
//   };

//   const forgotHandler = () => {
//     // toggle(); // Close the modal and navigate to the reset password page if needed
//   };

//   const registerHandler = () => {
//     // toggle(); // Close the modal and open the registration modal
//     // regToggle();
//   };

//   return (
//     <>
//     <div className={`fixed inset-0 flex items-center justify-center ${modal ? 'block' : 'hidden'}`}>
//       <div className="bg-white rounded-lg shadow-lg w-96 p-6">
//         <h2 className="text-xl font-semibold mb-4">LOGIN HERE</h2>
//         <form onSubmit={submitHandler}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-pink-300 focus:border-pink-500 p-2"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-pink-300 focus:border-pink-500 p-2"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-pink-300 hover:bg-blue-200 text-white font-semibold rounded-xl py-2 transition duration-200"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-green-800">
//           Create Account...!
//           <span
//             role="button"
//             onClick={registerHandler}
//             className="text-blue-500 underline cursor-pointer"
//           >
//             SignUp
//           </span>
//         </p>
//         <p
//           className="text-center text-blue-500 cursor-pointer mt-2"
//           onClick={forgotHandler}
//         >
//           Forgot Password..?
//         </p>
//       </div>
//       <div className={`fixed inset-0 bg-black opacity-50 ${modal ? 'block' : 'hidden'}`} onClick={toggle}></div>
//     </div>
//   </>
//   );
// }
