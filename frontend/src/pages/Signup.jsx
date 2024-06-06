import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signup = () => {

    const navigate = useNavigate(); // Initialize useNavigate

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");


    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />

        <InputBox onChange={e =>{
            setFirstName(e.target.value)
        }} placeholder="First Name" label={"First Name"} />

        <InputBox onChange={e =>{
            setLastName(e.target.value)
        }} placeholder="Last Name" label={"Last Name"} />

        <InputBox onChange={e =>{
            setUsername(e.target.value)
        }} placeholder="name@gmail.com" label={"Email"} />

        <InputBox onChange={e =>{
            setPassword(e.target.value)
        }} placeholder="password" label={"Password"} />

        <div className="pt-4">
          <Button onClick={async ()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup" , {
                username,
                firstName,
                lastName,
                password
            })
            localStorage.setItem("secret",response.data.token);
            navigate("/dashboard")
            
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}

{
    /**
     * So after creating our basic structure of frontend, we look now to connect it with our backend
     * The first thing here in Signup component that we will do is that, we will set the state variables as the input of the inputBox changes and we 
     * pass the onChange function into our inputBox component and call it from there.
     * 
     * Similarly we added it in every InputBox component. Now we want that when we click the Button of our Signup page then there goes a backEnd call 
     * that handles the signup route part. And it requires a body which we send using the axios.post where the first argument is the link of that endpoint
     * and then the second argument is the request body. Now our onClick() function in the Button Component has to be passed as prop as well to our component
     * as Button component is not the native html component but we created it.
     * 
     * So now once you signup , you will able to see the users in your mongoDB database, Now but in the response you will get the token as well, which
     * you have to pass in your future request, so where will you store it?? You will store it in the localStorage.
     * So localStorage is within the chrome browser itself, and we will store it there only, using a secret password, somewhat like you did in jwt.
     * 
     * 
     */
}