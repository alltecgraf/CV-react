import { useState } from 'react'
import Input from './Input.jsx'
import Button from './Button.jsx'

export default function General() {
    const [infoSubmitted, setInfoSubmitted] = useState(false)
    const [inputText, setInputText] = useState({ name: '', email: '', phone: '' })
    const [displayText, setDisplayText] = useState({ name: '', email: '', phone: '' });

    const disableEdit = !infoSubmitted;

    function handleNameInput(event) {
        setInputText(prev => ({ ...prev, name: event.target.value }))
    }
    function handleEmailInput(event) {
        setInputText(prev => ({ ...prev, email: event.target.value }))

    }
    function handlePhoneInput(event) {
        setInputText(prev => ({ ...prev, phone: event.target.value }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        setInfoSubmitted(!infoSubmitted);
        setDisplayText(inputText);
    }

    function handleEdit() {
        setInfoSubmitted(!infoSubmitted);
    }

    return (
        <div>
            <div>
                <div>{displayText.name && 'Name: ' + displayText.name}</div>
                <div>{displayText.email && 'E-mail: ' + displayText.email}</div>
                <div>{displayText.phone && 'Phone: ' + displayText.phone}</div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder='name' type='text' onChange={handleNameInput} />
                    <input placeholder='e-mail' type='text' onChange={handleEmailInput} />
                    <input placeholder='phone' type='number' onChange={handlePhoneInput} />
                    <button text='edit' disabled={disableEdit} onClick={handleEdit}>Edit</button>
                    <button text='submit' disabled={infoSubmitted} type='submit'>Submit</button>
                </form>
            </div>

        </div>
    )
}