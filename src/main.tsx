import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {WebWorker} from './pages/WebWorker.tsx';
import {NoWebWorker} from './pages/NoWebWorker.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/no-web-worker',
        element: <NoWebWorker />,
    },
    {
        path: '/web-worker',
        element: <WebWorker />,
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MantineProvider>
          <RouterProvider router={router} />
      </MantineProvider>
  </React.StrictMode>,
)
