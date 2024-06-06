import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

export const DashBoard = () =>{
    const[balance,setBalance] = useState(0);

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers : {
                Authorization : "Bearer "+ localStorage.getItem("secret")
            }
        })
        .then(response=>{
            setBalance(response.data.balance);
        })
    },[balance])
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value = {balance} />
            <Users />
        </div>
    </div>
}
{
    /**
     * Add a logic that when you get the list of all the users thenyou dont see yourself there and only see the other people only.in the Users component
     */
}