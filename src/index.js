import ReactDOM from 'react-dom/client';
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducers/reducer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BaseLayout from './components/layouts/BaseLayout'
import Register from './components/Register'
import Login from './components/Login'
import SearchPodcast from './components/SearchPodcast'
import Following from './components/Following'
import Listened from './components/Listened'
import Logout from './components/Logout'
import Menu from './components/layouts/Menu'
import RequireAuth from './components/RequireAuth';
import Modal from './components/Modal'



let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;
let store = createStore(reducer, {}, composeEnhancers(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/searchpodcast' element={<SearchPodcast />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='/menu' element={<Menu />} />
            <Route path='/following' element={<RequireAuth> <Following /> </RequireAuth>} />
            <Route path='/listened' element={<RequireAuth> <Listened /> </RequireAuth>} />
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </>
)



