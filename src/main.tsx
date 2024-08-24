import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TanStackProvider from './provider/TanstackProvider.tsx';
import { StoreProvider } from './provider/StoreProvide.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <TanStackProvider>
        <App />
      </TanStackProvider>
    </StoreProvider>
  </StrictMode>,
)
