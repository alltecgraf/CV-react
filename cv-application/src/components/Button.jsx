export default function Button({ isDisabled, text, onClick }, ) {
    return (
        <button
            className='button'
            id={text}
            disabled={isDisabled}
            type=''
            onClick={onClick}>
            {text}

        </button>
    )
}