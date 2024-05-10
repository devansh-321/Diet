import './style.css';

const Button = (props) => {

    return<>
        <button 
            type={props?.type}
            name={props?.name}
            onClick={props?.onClick}
            className={`button ${props?.variant}`}
        >
           {props?.loading ? "Loading ..." :  (props?.icon ? props?.icon : '') +" "+props?.title}
        </button>
    
    </>
}

export default Button;