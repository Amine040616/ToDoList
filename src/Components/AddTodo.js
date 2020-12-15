import React, {useState} from 'react';


function AddTodo({handelAddd}){
    const [textfield, setTextfield] = useState('');

    function handelChange(ev){
       setTextfield(ev.target.value);
        //alert(ev.target.value)
    }

    function handling(){
        handelAddd(textfield);
        setTextfield('');
    }

    return(

        <div>
            <input placeholder='Ajouter une tâche' value={textfield} onChange={(e)=>handelChange(e)}/>
            <button onClick={()=>handling()}>Ajouter</button>
        </div>
    )
}
export default AddTodo;