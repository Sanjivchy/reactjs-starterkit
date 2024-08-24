import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TanStackProvider from './provider/TanstackProvider.tsx';
import { StoreProvider } from './provider/StoreProvide.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <TanStackProvider>
        <App />
        <ToastContainer />
      </TanStackProvider>
    </StoreProvider>
  </StrictMode>,
)
