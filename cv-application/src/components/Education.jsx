import { useState } from 'react'


export default function General() {
    const [infoSubmitted, setInfoSubmitted] = useState(false)
    const [inputText, setInputText] = useState({ name: '', email: '', phone: '' })
    const [displayText, setDisplayText] = useState({ name: '', email: '', phone: '' });

    const disableEdit = !infoSubmitted;
    const textDisplay = infoSubmitted ? { display: 'block' } : { display: 'none' };
    const inputDisplay = infoSubmitted ? { display: 'none' } : { display: 'block' };

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
                <div>Education:</div>
                <div style={textDisplay}>{'Name: ' + displayText.name}</div>
                <div style={textDisplay}>{'E-mail: ' + displayText.email}</div>
                <div style={textDisplay}>{'Phone: ' + displayText.phone}</div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input style={inputDisplay} placeholder='name' type='text' onChange={handleNameInput} />
                    <input style={inputDisplay} placeholder='e-mail' type='text' onChange={handleEmailInput} />
                    <input style={inputDisplay} placeholder='phone' type='tel' onChange={handlePhoneInput} />
                    <button text='edit' disabled={disableEdit} onClick={handleEdit}>Edit</button>
                    <button text='submit' disabled={infoSubmitted} type='submit'>Submit</button>
                </form>
            </div>

        </div>
    )
}