import './App.css'
import Login from './components/Login/Login'
import Loged from './components/Login/Loged/Loged';
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/loged",
      element: <Loged/>
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
