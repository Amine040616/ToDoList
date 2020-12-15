import React from 'react';
import Todo from './Todo'


function TodoList({person, handelDell, completario, handeledito, editoBerrasmi}){
    return(

        <div>
            {person.map(el=><Todo 
            persona={el} 
            key={el.id} 
            handelDell={handelDell} 
            completario={completario} 
            handeledito={handeledito} 
            editoBerrasmi={editoBerrasmi}/>)}
        </div>
    )
}
export default TodoList;