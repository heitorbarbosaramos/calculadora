import './Button.css'
const Button = (props) => {
    return(
        <button 
            onClick={e => props.click && props.click(e.target.innerHTML)}
            className={
                `button 
                ${props.operation ? 'operation' : ''} 
                ${props.duple ? 'duple' : ''} 
                ${props.triple ? 'triple' : ''} 
                `
            }>
            {props.label}
        </button>
    )
}
export default Button