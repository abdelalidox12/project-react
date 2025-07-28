import { useState } from "react";
import './componentstyle.css';


function Form() {


     
    //  const [Description,setDescription] = useState("");

    // function setN(event) {
    //     // setND({Name:event.target.value});

    //     setND({...ND,Name:event.target.value})
       
       
    //   }

    //       function setD(event) {
    //     // setND({Description:event.target.value});

    //     setND({...ND,Description:event.target.value})
        
    //   }



       const [ND,setND] = useState({ Name:"" ,Email:"" , Age:"" , Descriptiond:"" , Status:""});

    return ( 

                     <div className="form">

    <form action="" onSubmit={(event) => {event.preventDefault(); console.log(ND.Name , ND.Email , ND.Age , ND.Descriptiond , ND.Status )  }}>

    <div >
            <label className="yname" htmlFor="">Your Name : </label><br />
            <input type="text" className="name"         value={ND.Name} onChange={(event) => { setND({...ND,Name:event.target.value})}}/>
    </div>

<div>
            <label className="ydescription" htmlFor=""   >Email :</label><br />
            <input type="text" className="name" value={ND.Email} onChange={(event) => { setND({...ND,Email:event.target.value})}} />
    </div>

 <div>
            <label className="ydescription" htmlFor=""   >Age :</label><br />
            <input type="text" className="name" value={ND.Age} onChange={(event) => { setND({...ND,Age:event.target.value})}} />
    </div>

    <div>
        <label className="ydescription" htmlFor=""   >Description :</label><br />
        <textarea className="description" value={ND.Descriptiond} onChange={(event) => { setND({...ND,Descriptiond:event.target.value} )}} />
</div>


<div className="radio">

    <input type="radio" value={"derecture"} checked={ND.Status == "derecture"} onChange={(event) => { setND({...ND,Status:event.target.value} )}} />derecture
    <input type="radio" value={"teacher"}   checked={ND.Status == "teacher"} onChange={(event) => { setND({...ND,Status:event.target.value} )}} />teacher
    <input type="radio" value={"student"}   checked={ND.Status == "student"} onChange={(event) => { setND({...ND,Status:event.target.value} )}}/>student

</div>

   <div> <button className='btnx'>submet</button></div>

    </form>

        </div>

     );
}

export default Form;