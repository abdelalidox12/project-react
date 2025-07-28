import './componentstyle.css'

export default function Header({title,description}) {

    return (
        <div className="headx">
            <h1 className="title">{title} <br /> <p>{description}</p></h1>
        </div>
 
    );
   
}