import './componentstyle.css'

export default function Post({description, title}) {

    return(
        <div className="post">
            <h1>{title}</h1>
    <h3>{description}</h3>

        </div>

    );

}