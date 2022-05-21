import React from 'react';
import App from './routes/App';
import {createRoot} from 'react-dom/client'
import { StrictMode } from 'react'
const rootElement = document.getElementById('app')
const root = createRoot(rootElement)
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
     );
