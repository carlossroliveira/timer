// Packages
import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'

// Logo
import logoIgnite from '../../assets/logo-ignite.svg'

// Styles
import { HeaderContainer } from './headerStyles'

export const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
