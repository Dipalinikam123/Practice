// FormComponant.js
import React, { useState } from 'react';

function FormComponant() {
    const [name, setName] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData({ name });
        setName('');
    };

    const handleClear = () => {
        setName('');
        setSubmittedData(null);
    };

    console.log("setSubmittedData", submittedData);

    return (
        <div>
            <h1>Form Submission Example</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>
                <button data-testid="btn1" type="submit">Submit</button>
                <button type="button" onClick={handleClear}>Clear</button> {/* Changed type to button */}
            </form>
            {submittedData && (
                <div>
                    <h2>Submitted Data: </h2>
                    <p>Name: {submittedData.name}</p>
                </div>
            )}
        </div>
    );
}

export default FormComponant;
