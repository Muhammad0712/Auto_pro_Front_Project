
import { Route, Routes } from 'react-router-dom'
import Registration from '../pages/auth/Registration'
import App from '../App'
import NotFound from '../pages/NotFound/NotFound'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Router
