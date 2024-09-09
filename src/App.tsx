import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

function App() {

  return (
    <div>
      <ToastContainer position='top-right' />
      <RouterProvider router={routes}/>
      <p className='text-2xl font-semibold'>Hello</p>
    </div>
  )
}

export default App
