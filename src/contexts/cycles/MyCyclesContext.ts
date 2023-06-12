// Packages
import { createContext } from 'react'

// Types
import { CyclesContextType } from './types'

const defaultContext = {} as CyclesContextType

export const MyCyclesContext = createContext(defaultContext)
