import Btn from './button'
import './componentstyle.css'


export default function Dachbord() {

    const contents = [

        {id:2, cont:"iphone" , child:(<img src="../public/imge1.jpg" alt="" />) },
        {id:3, cont:"iphone",  child:(<img src="../public/imge2.jpg" alt="" />) },
        {id:4, cont:"iphone " , child:(<img src="../public/imge3.jpg" alt="" />) },
        // {id:5, cont:"iphone " , child:(<img src="../public/imge4.jpg" alt="" />) },
        // {id:6, cont:"iphone " , child:(<><samp>2024</samp> <br /> <img src="../public/imge5.jpg" alt="" /><br /><a>link</a></>) },
        // {id:7, cont:"iphone" , child:<img src="../public/imge6.jpg" alt="" /> },
        //  {id:8, cont:"iphone" , child:<><br></br> <a>link</a></> },

];

const btnlist =    contents.map((x) => ( 
<Btn key={x.id}> 
    
    

    {x.cont}
    {x.child}

    
     </Btn>))   ;


    return(
        <div className="dach">




{btnlist}


        </div>

    );
    
}


