import React, { useState } from 'react';

function SmurfForm() {
    const [input, setInput] = useState({ name: "", age: "", height: "" });

    const handleInputChange = e => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        // TODO: post smurf
        setInput({ name: "", age: "", height: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Smurf name:
                <input
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="enter a name..."
                />
            </label>
            <label>
                Age:
                <input
                    name="age"
                    value={input.age}
                    onChange={handleInputChange}
                    type="number"
                    placeholder="age in years"
                />
            </label>
            <label>
                Height:
                <input
                    name="height"
                    value={input.height}
                    onChange={handleInputChange}
                    type="number"
                    placeholder="height in cm"
                />
            </label>
            <button>add smurf</button>
        </form>
    )
}

export default SmurfForm;