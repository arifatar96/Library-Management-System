import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addUser.css'

const AddUser = () => {

    let [name,setName] = useState("")
    let [age,setAge] = useState("")
    let [phoneNumber,setPhone] = useState("")
    let [email,setEmail] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();

        //data to be posted
        let userData = {name,age,email,phoneNumber}

        //posting to server
        fetch('http://localhost:1000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('user added sucessfully')
        navigate('/admin/userlist')
    }

    return ( 
        <div className="addUser">
            <h1>Add a User</h1>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" required placeholder="enter name of the user" />
                </div>
                <div className="age">
                    <input value={age} onChange={(e)=>{setAge(e.target.value)}} type="number" required placeholder="enter age" />
                </div>
                <div className="email">
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" required placeholder="enter email" />
                </div>
                <div className="phoneNumber">
                <input value={phoneNumber} onChange={(e)=>{setPhone(e.target.value)}} type="number" required placeholder="enter phone number" />
                </div>
                <button className="btnAddUser">Add User</button>
            </form>
        </div>
     );
}
 
export default AddUser;