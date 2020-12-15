import React, {useState} from 'react';


function Todo({persona, handelDell, completario, handeledito, editoBerrasmi}){
    const [textio, setTextio] = useState('')

    function Remov(){
        handelDell(persona.id);
    }

    function complet(){
        completario(persona.id);
    }
    function edit(){
        handeledito(persona.id);
    }

    function changerTextio(event){
        setTextio(event.target.value);
    }

    function newText(){
        editoBerrasmi(persona.id, textio);
        setTextio('');
    }

    return(

        <div id={persona.id}>
            {persona.edito
            ?<div>
            <input placeholder="Editer la tâche" value={textio} onChange={(e)=>changerTextio(e)}/>
            <button onClick={()=>newText()}>save</button>
            <button onClick={()=>edit()}>Cancel</button></div> 
            :<div>
            <span style={{textDecoration:persona.completo&&'line-through'}}>{persona.name}</span><br />
            <button onClick={()=>edit()}>Editer</button>
            <button onClick={()=>complet()}>Completer</button>
            <button onClick={()=>Remov()}>Supprimer</button>
            </div>}
        </div>
    )
}
export default Todo;