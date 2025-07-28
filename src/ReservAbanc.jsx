import { useState } from "react";
import './componentstyle.css';
import Model from "./Model";
import MyInputComponent from "./MyInputComponent";

function ReservAbanc() {
  const [Request, setRequest] = useState({Name: "", Phone: "", Age: "", Employ: false, Salary: ""});
  const [errorMessage, seterrorMessage] = useState("");
  const [styls, setStyl] = useState(false);

  function addRequest(event) {
    event.preventDefault();
    const R = { ...Request };

    if (R.Phone.length > 13 || R.Phone.length < 10) {
      seterrorMessage("phone +212......00 or 06......00");
      setStyl(true);
      return;
    }

    if (Number(R.Age) > 60 || Number(R.Age) < 20 || !Number(R.Age) ) {
      seterrorMessage("20 < age < 60");
      setStyl(true);
      return;
    }

    seterrorMessage("request successful");
    setStyl(true);
  }


  function handleCloseModal() {
    setStyl(false);

    if (errorMessage === "request successful") {

      setRequest({ Name: "", Phone: "", Age: "", Employ: false, Salary: "" });
    }
  }

  function handelChangeName(name){

    setRequest({ ...Request, Name:name })
  }
  
 function handelChangePhone(Phone){

    setRequest({ ...Request, Phone:Phone })
  }
 function handelChangeAge(Age){

    setRequest({ ...Request, Age:Age })
  }


  return (
    <>
      
      <form onSubmit={addRequest}>
        <Model errorMessage={errorMessage} fenv={styls} onClose={handleCloseModal} />

        <h1 id="title">Requesting a Loan</h1>

        <MyInputComponent ValueInput={Request.Name} handelChange={handelChangeName} inputName={"Full Name"} typ={"text"}/>

        <MyInputComponent ValueInput={Request.Phone} handelChange={handelChangePhone} inputName={"Phone Number"} typ={"tel"} />

        <MyInputComponent ValueInput={Request.Age} handelChange={handelChangeAge} inputName={"Age"} typ={"number"} />


        <div id="emp">
          <label htmlFor="employe">Are you employee?</label>
          <input
            checked={Request.Employ}
            onChange={(v) =>
              setRequest({ ...Request, Employ: v.target.checked })
            }
            type="checkbox"
            id="employe"
          />
        </div>

        <div>
          <label htmlFor="salary">Salary</label>
          <select
            id="salary"
            value={Request.Salary}
            onChange={(v) =>
              setRequest({ ...Request, Salary: v.target.value })
            }
          >
            <option value={""}>---Choose salary---</option>
            <option value={"5000dh"}>5000dh</option>
            <option value={"6000dh"}>6000dh</option>
            <option value={"7000dh"}>7000dh</option>
            <option value={"> 7000dh"}>&gt; 7000dh</option>
          </select>
        </div>

<button id="submet" type="submit" disabled={ !Request.Name || !Request.Phone || !Request.Age || !Request.Salary}>Submit</button>

      </form>
    </>
  );
}

export default ReservAbanc;
