import React, {useState} from 'react';
import { validateEmail, validateName, validateMessage} from '../../utils/helpers';
import { send } from 'emailjs';

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
            setErrorMessage(e.target.name + " This field is required");
        }
    }

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



    const handleFormSubmit = (e) => {
        e.preventDefault();
    }



}