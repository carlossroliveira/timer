// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Home } from '../page/Home'
import { History } from '../page/History'
import { DefaultLayout } from '../components/DefaultLayout'

export const DefaultRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Route>

        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
