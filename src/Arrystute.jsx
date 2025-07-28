import { useState } from "react";
import './componentstyle.css'

let indexx=6;
let mode = "creation";
let upindex;
let hidb;
function Arrystute() {

    const [vAdd, setVAdd]=useState("");
    const [arrName, setArrName]=useState([
       { id:0 , name:"karim"} ,
       { id:1 , name:"ali"}   ,
       { id:2 , name:"ahmded"} ,
       { id:3 , name:"dox"}    ,
       { id:4 , name:"amine"}  ,
       { id:5 , name:"aymane"} , ]);

 


    const arrNamelist = arrName.map((Name)=>{

        return  <li key={Name.id}  >{Name.name}<button id="del" style={hidb} onClick={()=>{deleted(Name.id)}}>Delet</button><button id="upd" style={hidb} onClick={()=>{updet(Name.id)}}>Updet</button></li> ;
    });


let boton = mode == "updet" ? "UPDATE" : "ADD"

    function addName(){

const addarry = [...arrName];


if(mode == "updet"){

setArrName(addarry.map((updevice) => {
        if(updevice.id == upindex){
            console.log(updevice.name) 
            updevice.name= vAdd; 
            return updevice
        }else{ return updevice}
    })
    );
     mode = "creation";
        hidb ={};

}else {
 
 addarry.splice(indexx,0,{id:indexx , name:vAdd});
 setArrName(addarry);
 indexx++; 

}

        setVAdd("")
           
    }

    function deleted(id) {

// const newarryName = [...arrName]; 
// let v =0;
// let i =0;
//         for(let arayname of newarryName){   

//                 if(arayname.id == id) {  v = i} 
//                 i++;  

//           }
//   newarryName.splice(v,1)        
// setArrName(newarryName); 

        const newarryName = arrName.filter( (DellName) => {return DellName.id !== id;});
       
        setArrName(newarryName)


 }



    function updet(id){
    mode = "updet";
    hidb = {display :"none"};
    upindex = id;

  arrName.map((device) => {
        if(device.id == upindex){
                setVAdd(device.name);
        }
    })


    }



    return ( 
<div style={{margin:"100px",display:"block",justifyContent:"center",alignContent:"center"}}>
        

       {arrNamelist} <br />
        <input type="text" onKeyUp={(e) => { if(e.key ==="Enter"){ addName() }}} value={vAdd} onChange={(x)=>{
setVAdd(x.target.value)
        }}/>
        <button onClick={addName}>{boton}</button>
</div>




     );
}

export default Arrystute;

