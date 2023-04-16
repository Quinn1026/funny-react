import { Navigate, useRoutes } from 'react-router-dom'
import Home from '@/views/home/index'

export const rootRouter = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  }
]

const Router = () => {
	const routes = useRoutes(rootRouter)
	return routes
}

export default Router
