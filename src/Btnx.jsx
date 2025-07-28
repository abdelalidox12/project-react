import { useState } from "react";




function Btnx() {

const [val ,setval] = useState("ali")


function change() {
{ val == "ali" ? setval("ahmed")  : setval("ali") }

}




    return ( 
        <div>

                <button onClick={change} style={{ textAlign:"center", fontSize:"30px", width:"150px" , }} className="btnx">cleck</button><br /><br />
                <h1 style={{ textAlign:"center", fontSize:"40px", width:"150px", padding:"5px 15px" ,border:"4px solid #016f6f", borderRadius:"8px" }}>{val}</h1>

        </div>


     );
}

export default Btnx;



