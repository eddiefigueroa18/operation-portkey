import React, {useState} from 'react';
import { validateEmail, validateName, validateMessage} from '../../utils/helpers';
import { send } from 'emailjs';

export default function ContactSection(mrPresident) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
}