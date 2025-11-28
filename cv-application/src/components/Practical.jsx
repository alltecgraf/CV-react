import { useState } from 'react'

function formatDate(event) {
    const dateObj = new Date(event.target.value);
    return dateObj.toLocaleString().split(',')[0];
}

export default function Practical() {
    const [infoSubmitted, setInfoSubmitted] = useState(false)
    const [inputText, setInputText] = useState({ company: '', position: '', startDate: '', finishDate: '' })
    const [displayText, setDisplayText] = useState({ company: '', position: '', startDate: '', finishDate: '' });

    const disableEdit = !infoSubmitted;
    const textDisplay = infoSubmitted ? { display: 'block' } : { display: 'none' };
    const inputDisplay = infoSubmitted ? { display: 'none' } : { display: 'block' };

    function handleCompanyInput(event) {
        setInputText(prev => ({ ...prev, company: event.target.value }))
    }
    function handlePositionInput(event) {
        setInputText(prev => ({ ...prev, position: event.target.value }))
    }
    function handleStartDateInput(event) {
        const date = formatDate(event)
        setInputText(prev => ({ ...prev, startDate: date }))
    }
    function handleFinishDateInput(event) {
        const date = formatDate(event)
        setInputText(prev => ({ ...prev, finishDate: date }))
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
        <div  className='container'>
            <div>
                <div style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginBottom: '3px'
                }}>Practical Experience:</div>
                <div style={textDisplay}>{'Company: ' + displayText.company}</div>
                <div style={textDisplay}>{'Position: ' + displayText.position}</div>
                <div style={textDisplay}>{'Worked from: ' + displayText.startDate}</div>
                <div style={textDisplay}>{'Worked until: ' + displayText.finishDate}</div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input style={inputDisplay} placeholder='Company Title' type='text' onChange={handleCompanyInput} />
                    <input style={inputDisplay} placeholder='Job Title' type='text' onChange={handlePositionInput} />
                    <div
                        style={inputDisplay}>
                        From:
                        <input type='date' onChange={handleStartDateInput} />
                    </div>
                    <div
                        style={inputDisplay}>
                        Until:
                        <input type='date' onChange={handleFinishDateInput} />
                    </div>
                    <button text='edit' disabled={disableEdit} onClick={handleEdit}>Edit</button>
                    <button text='submit' disabled={infoSubmitted} type='submit'>Submit</button>
                </form>
            </div>

        </div>
    )
}