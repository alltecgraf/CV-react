export default function Input({ label, onChange, type = 'text' }) {
    return (
        <input className='input'
            id={label}
            placeholder={label}
            type={type}
            onChange={onChange}>
        </input>
    )
}