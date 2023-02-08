// {} are used on named exports, whereas default exports have no {}
import React, {useState} from "react"

function ControlledFormHooks() {

    // destructuring is used to include property and method
    // value of name is an empty string ''
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }

    return (
        <div>
            <h2>Please fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input 
                        value={name}
                        // e = event. e.target.value uses the value inputted and assigns it to the variable name
                        onChange={(e) => setName(e.target.value)}
                        id="id-name" 
                        name="name" 
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query Category:</label>
                    <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} 
                        name="category" 
                        id="id-category">
                            <option value="website">Website Issue</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General Inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        name="comments" 
                        id="id-comments" 
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default ControlledFormHooks