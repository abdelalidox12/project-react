// Model.jsx
import './componentstyle.css';

function Model({ fenv, errorMessage, onClose }) {
let errormessag
  if( errorMessage == "request successful"){
   errormessag ="errormessag"
  }else{
    errormessag =""
  }
  if (!fenv) return null;
  return (
    <>
      <div id="allcontent"  onClick={onClose}>
      <div id="statu" className={errormessag} >
        <p className={errormessag} >{errorMessage}</p>
        <button className={errormessag} onClick={onClose} >OK</button>
      </div></div>
    </> 
  );
}

export default Model;
