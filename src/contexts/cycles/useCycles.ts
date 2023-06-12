// Packages
import { useContext } from 'react'

// Context
import { MyCyclesContext } from './MyCyclesContext'

export const useCycles = () => {
  const context = useContext(MyCyclesContext)

  if (!context) {
    throw new Error('useCycles must be used inside MyCyclesProvider')
  }
  return context
}
