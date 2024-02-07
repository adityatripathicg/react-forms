import { useState } from "react"

export default function Form(){
    let [formData,setFormData] = useState({
        fullName : "",
        userName : "",
        passWord : "",
    });

    // let handleNameChange = (event)=>{
    //     //console.log(event.target.value);
    //     setFullName(event.target.value);
    // };

    let handleInputChange = (event)=>{
        setFormData((currData)=>{
            return {...currData, [event.target.name] : event.target.value };
        });
    };
    let handleSumbit = (event)=>{
        event.preventDefault();
        setFormData({
            fullName : "",
            userName : "",
            passWord : "",
        })

    };
    return (
        <form onSubmit={handleSumbit}>
            <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter Your Name" value={formData.fullName} name="fullName" id="name" onChange={handleInputChange} />
        <br /><br />
        <label htmlFor="userName">UserName</label>
        <input type="text" placeholder="Enter Your userName" value={formData.userName}  id="userName" name="userName" onChange={handleInputChange} />
        <br /><br />
        <label htmlFor="passWord">passWord</label>
        <input type="passWord" placeholder="Enter Your passWord" value={formData.passWord}  id="passWord" name="passWord" onChange={handleInputChange} />
        <button>Submit</button>
        </form>
    )
}