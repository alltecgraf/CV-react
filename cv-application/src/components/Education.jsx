import { useState } from 'react'

function formatDate(event) {
    const dateObj = new Date(event.target.value);
    return dateObj.toLocaleString().split(',')[0];
}

export default function Practical() {
    const [infoSubmitted, setInfoSubmitted] = useState(false)
    const [inputText, setInputText] = useState({ university: '', title: '', degree: '', graduationDate: '' })
    const [displayText, setDisplayText] = useState({ university: '', title: '', degree: '', graduationDate: '' });

    const disableEdit = !infoSubmitted;
    const textDisplay = infoSubmitted ? { display: 'block' } : { display: 'none' };
    const inputDisplay = infoSubmitted ? { display: 'none' } : { display: 'block' };

    function handleUniversityInput(event) {
        setInputText(prev => ({ ...prev, university: event.target.value }))
    }
    function handleTitleInput(event) {
        setInputText(prev => ({ ...prev, title: event.target.value }))
    }
    function handleDegreeInput(event) {
        setInputText(prev => ({ ...prev, degree: event.target.value }))
    }
    function handleDateInput(event) {
        const date = formatDate(event)
        setInputText(prev => ({ ...prev, graduationDate: date }))
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
        <div className='container'>
            <div>
                <div style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '3px'
                }}>Education:</div>
                <div style={textDisplay}>{'University: ' + displayText.university}</div>
                <div style={textDisplay}>{'Title: ' + displayText.title}</div>
                <div style={textDisplay}>{'Degree: ' + displayText.degree}</div>
                <div style={textDisplay}>{'Graduated on: ' + displayText.graduationDate}</div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input style={inputDisplay} placeholder='University' type='text' onChange={handleUniversityInput} />
                    <input style={inputDisplay} placeholder='Title' type='text' onChange={handleTitleInput} />
                    <input style={inputDisplay} placeholder='Degree' type='text' onChange={handleDegreeInput} />
                    <div style={inputDisplay}>
                        Graduation date:
                        <input type='date' onChange={handleDateInput} />
                    </div>
                    <button text='edit' disabled={disableEdit} onClick={handleEdit}>Edit</button>
                    <button text='submit' disabled={infoSubmitted} type='submit'>Submit</button>
                </form>
            </div>

        </div>
    )
}