import { Navigate, useRoutes } from 'react-router-dom'
// @layouts
import Layout from '../layout'

// @Pages Auth

// @Pages PUBLIC
import Test from '../pages/Test'
import NotFound from '../pages/NotFound'
// ----------------------------------------------------------------------



export default function Routes () {
  return useRoutes([
    {
      path: '/404',
      element: <NotFound title="404" />
    },
    {
      path: '/*',
      element: <Navigate to="/404" />
    },
    /* {
      path: '',
      element: <Navigate to="/404" />
    }, */
    { 
      path: 'skin-type-quiz', 
      element: <Test /> 
    }
  ])
}
