import React, { useState } from 'react'
import ContactLogo from "../assets/Contact2.png"
import Location from '../CommonItem/ContactItem/Location';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {toast,Bounce} from 'react-toastify';
import db  from '../../Firebase/FirebaseSDK';
import { collection, addDoc } from "firebase/firestore"; 

const ContactComponent = () => {
  const auth = getAuth();
  const[loading,setloading] = useState(false);

  const[InputValue,setInputValue]=useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Number: "",
    Message: "",
  })

  const[InputError,setInputError]=useState({
    FirstNameError: "",
    LastNameError: "",
    EmailError: "",
    PasswordError: "",
    NumberError: "",
    MessageError: "",
  })


  // Handleinput start here 
  const Handleinput= (e) => {
    setInputValue({
      ...InputValue,
      [e.target.id]: e.target.value
    })
  };
  // Handleinput End here 

  // HandleMessege Function start here
  
  const HandleMessege = () => {
        const { FirstName, LastName, Email,Password, Number, Message } = InputValue;
        const {
          FirstNameError,
          LastNameError,
          EmailError,
          NumberError,
          MessageError,
        } = InputError;

        if(!FirstName){
          setInputError({
            ...InputError,
            LastNameError: "",
            EmailError: "",
            NumberError: "",
            MessageError: "",
            FirstNameError: "First Name Missing",
          })
        }else if(!LastName){
          setInputError({
            ...InputError,
            EmailError: "",
            NumberError: "",
            MessageError: "",
            FirstNameError: "",
            LastNameError: "Last Name Missing",
          })
        }else if(!Password){
          setInputError({
            ...InputError,
            EmailError: "",
            NumberError: "",
            MessageError: "",
            FirstNameError: "",
            LastNameError: "",
            PasswordError: "Password Missing"
          })
        }else if(!Email){
          setInputError({
            ...InputError,
            NumberError: "",
            MessageError: "",
            FirstNameError: "",
            LastNameError: "",
            EmailError: "Email Missing",
          })
        }else if(!Number){
          setInputError({
            ...InputError,
            MessageError: "",
            FirstNameError: "",
            LastNameError: "",
            EmailError: "",
            NumberError: "Number Missing",
          })
        }else if(!Message){
          setInputError({
            ...InputError,
            FirstNameError: "",
            LastNameError: "",
            EmailError: "",
            NumberError: "",
            MessageError: "Messege Missing",
          })
        }else{
         setInputError({
          ...InputError,
          FirstNameError: "",
          LastNameError: "",
          EmailError: "",
          NumberError: "",
          MessageError: "",
         });
         setloading(true);
         createUserWithEmailAndPassword(auth, InputValue.Email,InputValue.Password).then((usercredential) => {
          toast.success(`${InputValue.FirstName} Send Messege`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          
         }).then(() => {
          addDoc(collection(db, "users/"), InputValue);
         }).catch((err) => {
          toast.error(`${err.message} Not Send Messege`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
         }).finally(() => {
          setloading(false);
          setInputValue({
            FirstName: "",
            LastName: "",
            Email: "",
            Password: "",
            Number: "",
            Message: "",
          })
         })
          
        }
  };
  // HandleMessege Function End here 
  

  return (
    <>
      <div className="bg-BgColor">
        <div className="container">
          <div className="py-16">
            <h2 className="font-FontFamily font-bold text-3xl text-BtnColor mb-10 px-4 lg:px-0">
              Contact Me
            </h2>
          </div>
          <div className="flex py-20 gap-x-2 ">
            <div className="w-1/2 h-[820px] hidden lg:block">
              <picture>
                <img
                  src={ContactLogo}
                  alt={ContactLogo}
                  className="w-[500px] h-[820px]"
                />
              </picture>
            </div>
            <div className="w-full lg:w-1/2 bg-blue-200 lg:bg-CommonColor h-[820px] rounded-md shadow-lg px-4 lg:px-4">
              <div className="py-6">
                <h2 className="font-FontFamily font-bold text-3xl flex items-center justify-center">
                  Send me a message
                </h2>
              </div>
              <div className="pt-3">
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="messege"
                    className="font-FontFamily text-lg font-bold text-[#465979] w-full lg:w-[500px] pb-1"
                  >
                    First Name*
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <input
                    className="w-full lg:w-[500px] py-3 bg-gray-200 pl-3 focus:border-[3px] focus:border-blue-400 rounded-sm"
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    placeholder="Enter your first name here..."
                    onChange={Handleinput}
                    value={InputValue.FirstName}
                  ></input>
                  {InputError.FirstNameError && (
                    <p className="text-red-500 w-full lg:w-[500px]">
                      {InputError.FirstNameError}
                    </p>
                  )}
                </div>
              </div>
              {/* last name here  */}
              <div className="pt-3">
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="messege"
                    className="font-FontFamily text-lg font-bold text-[#465979] w-full lg:w-[500px] pb-1"
                  >
                    Last Name
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <input
                    className="w-full lg:w-[500px] py-3 bg-gray-200 pl-3 focus:border-[3px] focus:border-blue-400 rounded-sm"
                    type="text"
                    name="LastName"
                    id="LastName"
                    placeholder="Enter your last name here..."
                    onChange={Handleinput}
                    value={InputValue.LastName}
                  ></input>
                  {InputError.LastNameError && (
                    <p className="text-red-500 w-full lg:w-[500px]">
                      {InputError.LastNameError}
                    </p>
                  )}
                </div>
              </div>
              {/* last name here  */}
              {/* Email here  */}
              <div className="pt-3">
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="messege"
                    className="font-FontFamily text-lg font-bold text-[#465979] w-full lg:w-[500px] pb-1"
                  >
                    Email*
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <input
                    className="w-full lg:w-[500px] py-3 bg-gray-200 pl-3 focus:border-[3px] focus:border-blue-400 rounded-sm"
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Enter your email here..."
                    onChange={Handleinput}
                    value={InputValue.Email}
                  ></input>
                  {InputError.EmailError && (
                    <p className="text-red-500 w-full lg:w-[500px]">
                      {InputError.EmailError}
                    </p>
                  )}
                </div>
              </div>
              {/* Email here  */}

              {/* Password Here  */}
              <div className="pt-3">
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="messege"
                    className="font-FontFamily text-lg font-bold text-[#465979] w-full lg:w-[500px] pb-1"
                  >
                    Password*
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <input
                    className="w-full lg:w-[500px] py-3 bg-gray-200 pl-3 focus:border-[3px] focus:border-blue-400 rounded-sm"
                    type="Password"
                    name="Password"
                    id="Password"
                    placeholder="Enter your Pasword here..."
                    onChange={Handleinput}
                    value={InputValue.Password}
                  ></input>
                  {InputError.PasswordError && (
                    <p className="text-red-500 w-full lg:w-[500px]">
                      {InputError.PasswordError}
                    </p>
                  )}
                </div>
              </div>
              {/* Password Here  */}

              <div className="pt-3">
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="messege"
                    className="font-FontFamily text-lg font-bold text-[#465979] w-full lg:w-[500px] pb-1"
                  >
                    Number
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <input
                    className="w-full lg:w-[500px] py-3 bg-gray-200 pl-3 focus:border-[3px] focus:border-blue-400 rounded-sm"
                    type="number"
                    name="Number"
                    id="Number"
                    placeholder="Enter your number here..."
                    onChange={Handleinput}
                    value={InputValue.Number}
                  ></input>
                  {InputError.NumberError && (
                    <p className="text-red-500 w-full lg:w-[500px]">
                      {InputError.NumberError}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-3">
                <div className="flex items-center justify-center">
                  <label
                    htmlFor="messege"
                    className="font-FontFamily text-lg font-bold text-[#465979] w-full lg:w-[500px] pb-1"
                  >
                    Write Your Comment
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <textarea
                    className="w-full lg:w-[500px] max-h-20 bg-gray-200 pl-3 focus:border-[3px] focus:border-blue-400 rounded-sm"
                    name="message"
                    id="Message"
                    placeholder="Messege here"
                    onChange={Handleinput}
                    value={InputValue.Message}
                  ></textarea>
                  {InputError.MessageError && (
                    <p className="text-red-500 w-full lg:w-[500px]">
                      {InputError.MessageError}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center mt-10 cursor-pointer">
                {loading ? (
                  <button
                    type="button"
                    class="flex items-center gap-x-3 justify-center py-3 w-[320px] lg:w-[500px] bg-indigo-500 font-bold text-xl rounded-md"
                  >
                    <svg
                      class="w-5 h-5 border-4 border-white rounded-full border-t-green-600 animate-spin pt-3"
                      viewBox="0 0 24 24"
                    ></svg>
                    Processing...
                  </button>
                ) : (
                  <button
                    className="py-3 w-[320px] lg:w-[500px]  bg-blue-400 font-bold text-CommonColor text-xl rounded-md hover:bg-BtnColor"
                    onClick={HandleMessege}
                  >
                    Send Messege
                  </button>
                )}
              </div>
            </div>
          </div>
          <Location />
        </div>
      </div>
    </>
  );
}

export default ContactComponent
