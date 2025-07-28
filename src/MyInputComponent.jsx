import './componentstyle.css';


function MyInputComponent({ValueInput , handelChange , inputName ,typ }) {
    return (
<>
                <label htmlFor="input">{inputName}</label>
        <input
          value={ValueInput}
          onChange={(v) => handelChange(v.target.value)}
          type={typ}
          id='input'
          name='input'
          
        />
        </>
      );
}

export default MyInputComponent;