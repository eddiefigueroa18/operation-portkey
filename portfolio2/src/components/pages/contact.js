import React, {useState} from 'react';
import { validateEmail, validateName, validateMessage} from '../../utils/helpers';
// import { send } from 'emailjs';

export default function ContactSection(mrPresident) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');



    const [toSend, setToSend] = useState({
        email: '',
        name: '',
        message: '',
    });

    //Sets the message requiring user input in each field
    function requireField(e) {
        if(!e.target.value) {
            setErrorMessage(e.target.name + "This field is required");
        }
    };

    //Set the name and the value for what exactly caused the change.
    const handleInputChange = (e) => {
        const { name, value, } = e.target;
        setToSend({ ...toSend, [e.target.name]: e.target.value });

        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }
        return 
    };


    // Validation for user input according to REGEX in helpers.js file
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email!');
            return;
        }

        if (!validateName(name)) {
            setErrorMessage('Please enter a valid name!');
            return;
        }
        if (!validateMessage(message)) {
            setErrorMessage('Please enter a message 5 characters or more, Thank you!');
            return;
        }

        //Clears all inputs
        setErrorMessage('');
        setEmail('');
        setName('');
        setMessage('');
    };

   //===================================================================================//

   return (

    <section className="contactMeContainer">
        <h2 className='contactMeHeader'>Contact Me</h2>

            <form className='form-group'>

                {/* Name */}
                <input 
                className='nameInput'
                onChange={handleInputChange}
                onBlur={requireField}
                value={name}
                // name="name"
                type="text"
                placeholder="Your name"
                />
                <br />

                {/* email */}
                <input 
                className='emailInput'
                onChange={handleInputChange}
                onBlur={requireField}
                value={email}
                // name="email"
                type="text"
                placeholder="Email"
                />
                <br />

                {/* Message */}
                <input 
                className='messageInput'
                onChange={handleInputChange}
                onBlur={requireField}
                value={message}
                // name="message"
                type="text"
                placeholder="Type your message here"
                />
                <br />

                {/* submit button */}
                <div>
                    <button className="submit-button" type="button" onClick={handleFormSubmit}>Submit</button>
                </div>

                {/* error message text */}
                {errorMessage && (
                    <div>
                        <p className='error-message-text'>{errorMessage}</p>
                    </div>
                )}


            </form>

    </section>



   );
}