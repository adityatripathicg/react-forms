import { useState } from "react"

export default function CommentsForm(){
    let [formData, setFormData] = useState({
        username : "",
        rating : 5,
        remarks : "",
    });

    let handleInputChange = (event)=>{
        setFormData((currData)=>{
            return {...currData, [event.target.name] : event.target.value}
        })
    };

    let handleSubmit = (event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            username : "",
        rating : 5,
        remarks : "",
        })
    };

    return (
        <div>
            <h4>Give a Comment!</h4>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" value={formData.username} id="username" onChange={handleInputChange} name="username" />
                <br /><br /><br /><br />
                <label htmlFor="rating">Ratings</label>
                <input type="number" id="rating" min={1} max={5} placeholder="rating" value={formData.rating} onChange={handleInputChange} name="rating" />
                <br /><br /><br /><br />
                <label htmlFor="remarks">Remarks</label>
                <textarea name="remarks" id="remarks" cols="30" rows="10" value={formData.remarks} onChange={handleInputChange} >Remarks </textarea>
                <br /><br /><br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    )

}