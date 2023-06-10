// Packages
import { Outlet } from 'react-router-dom'

// Styles
import { ContainerSC } from './layoutStyles'

export const DefaultLayout = () => {
  return (
    <ContainerSC>
      <Outlet />
    </ContainerSC>
  )
}
