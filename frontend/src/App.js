import { ToastContainer } from 'react-toastify';
import './App.css';
import MainRouter from './Router';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer autoClose={2000}/>
      <MainRouter />
    </>
    
  );
}

export default App;
