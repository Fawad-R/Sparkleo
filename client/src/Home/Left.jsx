import React, { useState } from 'react';

const Left = () => {
    // State to store form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Create the data object to be sent
        console.log('email, password',email, password)
        const data = { email, password };
        console.log('data',data)
        try {
            // Send data to the backend using fetch
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log('response',response)
            const result = await response.json();
            console.log('result',result)

            // Handle response (e.g., store token, navigate, show message)
            if (response.ok) {
                console.log('Login successful:', result);
                alert('Login successful:');
                // You can redirect or save the token here
            } else {
                console.error('Login failed:', result);
                alert('Login failed:');
                // Handle error case
            }
        } catch (error) {
            alert(error);
            console.error('Error during login:', error);
        }
    };

    return (
        <div style={{ backgroundColor: 'white', marginRight: '2%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '6% 0%' }}>
                <div style={{ margin: 0 }}>
                    <h1 style={{ color: 'red', margin: 0 }}>Sign In</h1>
                    <p style={{ opacity: '25%', margin: 0 }}>Enter your email and password to sign in!</p>
                </div>
                {/* <form onSubmit={handleSubmit}> */}
                <form >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ margin: '2% 0%' }} htmlFor="email">
                            Email<span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            style={{ margin: '2% 0%', padding: '12px', borderRadius: '16px', border: '1px solid lightGrey' }}
                            type="email"
                            placeholder="mail@example.com"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label style={{ margin: '2% 0%' }} htmlFor="password">
                            Password<span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            style={{ margin: '2% 0%', padding: '12px', borderRadius: '16px', border: '1px solid lightGrey' }}
                            type="password"
                            placeholder="min. 8 characters"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ backgroundColor: 'red' }} />
                            <p style={{ marginLeft: '5px' }}>Keep me logged In</p>
                        </div>
                        <p style={{ color: 'red' }}>Forgot Password?</p>
                    </div>
                    <button
                        style={{
                            backgroundColor: 'red',
                            color: 'white',
                            width: '100%',
                            padding: '10px',
                            outline: 'none',
                            border: 'none',
                            borderRadius: '16px',
                            marginTop: '10px',
                        }}
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                    <p>
                        Not registered yet? <span style={{ color: 'red', fontWeight: 'bold' }}>Create an Account</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Left;
