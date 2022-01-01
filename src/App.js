import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Pages from './Pages'
import { Provider } from 'react-redux'
import { store } from './Services'

import './App.css'


const App = () => {

  const routes = [
    { path: '/', element: <Pages.Home /> },
    { path: '/about', element: <Pages.About /> }
  ]


  return (
    <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
