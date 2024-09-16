import React, { Suspense, useEffect } from 'react'
// import { HashRouter, Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// Containers
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
// Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'))
// const Register = React.lazy(() => import('./views/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

// Pages
import Login from './views/pages/login/Login';
import Register from './views/pages/register/Register';
import Page404 from './views/pages/page404/Page404';
import Page500 from './views/pages/page500/Page500';
// Containers
import DefaultLayout from './layout/DefaultLayout';

const App = () => {
  // const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  // const storedTheme = useSelector((state) => state.theme)

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.href.split('?')[1])
  //   const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
  //   if (theme) {
  //     setColorMode(theme)
  //   }

  //   if (isColorModeSet()) {
  //     return
  //   }

  //   setColorMode(storedTheme)
  // }, [])

  return (
    <Router>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App
