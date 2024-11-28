import '../styles/App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// routing for websites goes here....
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root Element</div>
  },
  {
    path: '/quiz',
    element: <div>Quiz</div>
  },
  {
    path: '/result',
    element: <div>Result</div>
  },
  {path: '/login',
    element: <div>Login</div>
  },
  {
    path: '/signup',
    element: <div>Signup</div>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
