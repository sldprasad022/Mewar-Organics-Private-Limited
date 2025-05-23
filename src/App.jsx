
import { ToastContainer } from 'react-toastify'
import './App.css'
import MainRoute from './MainRoute'

function App() {
 
  return (
         <div>
          <ToastContainer position='top-right' autoClose={3000} />
           <MainRoute/>
        </div>
  )
}

export default App
