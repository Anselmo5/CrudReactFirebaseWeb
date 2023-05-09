import Criação from './components/criação';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='aling'>
        <div className="form">
            <div className='forminput'>
              <input type="text" placeholder='Gmail' />
              <input type='password' placeholder='Password' />
              <div className='alingbutton'>
                  <button onClike='oi'>Entrar</button>
                    <div className='link'>
                      <button onClick={Criação}>Criar Conta</button>
                    </div>
                </div>
            </div> 
          </div>     
        </div>
    </div>
  );
}

export default App;
