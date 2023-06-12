// Packages
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import { App } from './App.tsx'

// Context
import { MyThemeProvider } from './contexts/themes/MyThemeProvider.tsx'
import { CyclesContextProvider } from './contexts/cycles/MyCyclesProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      <CyclesContextProvider>
        <App />
      </CyclesContextProvider>
    </MyThemeProvider>
  </React.StrictMode>,
)
