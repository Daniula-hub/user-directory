export default function Button({ handleClick, buttonTitle}){
    return(
        <button onClick={ handleClick} > {buttonTitle} </button>
    )
}