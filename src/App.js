import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import './App.css'


const App = () => {

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> }
  ]


  return (
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </BrowserRouter>
  );
}

export default App;
