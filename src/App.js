import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import './App.css';

function App() {
  const [persons, setPersons]=useState([{name:'abdessmad', id:'1', completo:false,edito:false},{name:'hedi',id:'2', completo:false,edito:false}]);

  function handelAdd(textfiel){
    textfiel && setPersons([...persons,{name:textfiel, id:Math.random(), completo:false, edito:false}]);
  //console.log(persons)

  }

  function handelRemove(idDel){
    setPersons(persons.filter(el=>el.id!==idDel))
    //console.log('femchay'+idDel)
  }

  function handelComplete(idComp){
    setPersons(persons.map(el => (el.id===idComp ? {...el, completo: !el.completo} : el)))
    //console.log(persons);
  }

  function handeledito(idEdi){
    setPersons(persons.map(el => (el.id===idEdi ? {...el, edito: !el.edito} : el)))
  }

  function editoBerrasmi(ediEdi, naame){
    setPersons(persons.map(el => (el.id===ediEdi ? {...el, name: naame,  edito: false, completo: false} : el)));
    //setPersons(persons.map(el => (el.id===ediEdi ? {...el, edito: !el.edito} : el)))
    
    //handeledito(ediEdi)
  }


  return (
    <div className="App App-header">
      <AddTodo handelAddd={handelAdd} />
      <TodoList person={persons} handelDell={handelRemove} completario={handelComplete} handeledito={handeledito} editoBerrasmi={editoBerrasmi} />
    </div>
  );
}

export default App;
