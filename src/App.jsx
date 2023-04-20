
import './App.css';
import Header from './components/Header';
import { Fragment } from 'react';

function App() {

  function handleSubmit(event){
    event.preventDefault();

  }

  return (
    <Fragment>
    <Header/>
    <main>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input type='text' onChange = {handleOnChangeName}/>

        <label>Email</label>
        <input type='email'/>

        <button type='submit'>Cadastrar</button>

      </form>
    </main>
    </Fragment>
  );
}

export default App;
