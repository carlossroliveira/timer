// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Home } from '../page/Home'
import { History } from '../page/History'
import { Layout } from '../components/Layout'

export const DefaultRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Route>

        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
