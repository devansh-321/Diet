import { useState } from "react";
import "./style.css";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Button from "../Button";

// ===================================FormGroup======================================================

export const FormGroup = (props) => {
  return <div className={`form-group column-${props?.col} ${props?.mediaQueries}`}>{props.children}</div>;
};

FormGroup.defaultProps = {
  col: 2,
  mediaQueries: "sm md lg"
};

export const Form = (props) => {
  return <div className="form">{props?.children}</div>;
};


export const FormName = (props) => {
  return <div className="form-name">{props?.name}</div>;
};

export const FormSectionName = (props) => {
  return <div className="form-section-name">{props?.name}</div>;
};

// ===================================FormGroup======================================================
// ===================================FormField======================================================

export const FormField = (props) => {
  return <div className={`form-field ${props?.mediaQueries}`}>{props.children}</div>;
};

FormField.defaultProps = {
  col: 2,
  mediaQueries: "sm md lg"
};

// ===================================FormField======================================================
// ===================================Input======================================================

export const Input = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="input-div">
      {props?.label && <label className="input-label">{props?.label}</label>}
      <div className="input-inner-div">
        <input
          className="input"
          name={props?.name}
          disabled={props?.disabled}
          value={props?.value || ""}
          placeholder={props?.hint}
          type={props?.password ? (toggle ? "text" : "password") : props?.type}
          onChange={(e) => props?.handleChange(props.name, e.target.value)}
        />
        {props?.password && (
          <span className="icon icon-pass" onClick={handleToggle}>
            {toggle ? <IoIosEyeOff /> : <IoIosEye />}
          </span>
        )}
      </div>
      {props?.error && <p className="input-error-text">{props.error}</p>}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};
// ===================================Input======================================================

// ===================================textarea======================================================

export const Textarea =(props) =>{


  return<div className="textarea-div">
      {props?.label && <label className="textarea-label">{props?.label}</label>}
      <div className="textarea-inner-div">
          <textarea 
              className="textarea"
              name={props?.name}
              value={props?.value || ''}
              rows={props?.rows}
              cols={props?.cols}
              placeholder={props?.hint}
              onChange={(e)=>props?.handleChange(props.name, e.target.value)}
          ></textarea>
      </div>
  </div>
      
}

Textarea.defaultProps = {
  rows: 10,
  cols: 30,
}
// ===================================textarea======================================================

// ===================================Dropdown======================================================
export const Dropdown = (props) => {
  return (
    <div className="dropdown-section">
      {props?.label && <label className="input-label">{props?.label}</label>}
      <div className="dropdown-inner-div">
        <select
          className="dropdown"
          id={props.id}
          onChange={(e) =>
            props.handleChange(
              props.name,
              e?.target?.value,
              props?.options?.list.find(
                (itm) => itm[props?.options?.value] === e?.target?.value
              )
            )
          }
          value={props?.selected}
        >
          <option value="0">--Select--</option>

          {props?.options?.list?.map((itm, index) => {
            return (
              <option id={index} key={index} value={itm[props?.options?.value]}>
                {itm[props?.options?.name]}
              </option>
            );
          })}
        </select>
      </div>
      {props?.error && <p className="input-error-text">{props.error}</p>}
    </div>
  );
};
// ===================================Dropdown======================================================

// ===================================Popup======================================================

export const Popup = (props)=> {

  return props?.trigger && <div className="popup-section">
      <div className='popup-background'></div>

      <div className="popup-content">
          <div className="popup-header">
              <Button varient="icon" title={"x"} onClick={props?.setTrigger}/>
          </div>
          <div className="popup-body">
              {props.children}
          </div>
      </div>
      
  </div>
}

// ===================================Popup======================================================
// ===================================container======================================================

export const Container = ({children, maxWidth})=> {

  return <div className="container-section">
    <div className="container-inner-div" style={{maxWidth: maxWidth}}>
      {children}
    </div>
  </div>
}

Container.defaultProps = {
  maxWidth: '60em'
}

// ===================================container======================================================

export const Center = ({children})=> {

  return <div className="" style={{textAlign: 'center'}}>
      {children}
  </div>
}