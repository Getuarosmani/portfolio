import { useState } from 'react';
import './Contact.css';
import { Title } from '../Title/Title';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [sucsess, setSucsess] = useState('');

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const handleSubmit = async (event) => {
        event.preventDefault();

        setNameError('');
        setEmailError('');
        setMessageError('');

        let hasError = false;

        if (!name.trim()) {
            setNameError("Please enter your name.");
            setTimeout(() => setNameError(''), 5000);
            hasError = true;
        }

        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address.');
            setTimeout(() => setEmailError(''), 5000);
            hasError = true;
        }

        if (!message.trim()) {
            setMessageError("Please enter a message.");
            setTimeout(() => setMessageError(''), 5000);
            hasError = true;
        }

        if (hasError) return;

        const formData = new FormData(event.target);
        formData.append("access_key", "ec79a4e1-b0e4-4832-9bb9-a8430f1593c2");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            event.target.reset();
            setName('');
            setEmail('');
            setMessage('');
            setSucsess('Your message was sent succesfuly.');
            setTimeout(() => {
                setSucsess('');
            }, 5000)
        } else {
            console.log("Error", res);
        }
    };

    return (
        <div className="contacts">
            <div className="container">
                <Title title="Contacts" white />
                <form className="inputs-holder" onSubmit={handleSubmit}>
                    <div className="contacts-left">
                        <div className="name">
                            <label htmlFor="name">Full name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                placeholder="John Doe"
                                onChange={(e) => setName(e.target.value)} />
                            <p>{nameError}</p>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="you@example.com"
                                onChange={(e) => setEmail(e.target.value)} />
                            <p>{emailError}</p>
                        </div>
                    </div>
                    <div className="contacts-right">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            placeholder="Your message..."
                            onChange={(e) => setMessage(e.target.value)} />
                        <p>{messageError}</p>
                    </div>
                    <span className='sucsess'>{sucsess}</span>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
