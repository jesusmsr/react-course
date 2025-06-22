import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css';
import { App } from './App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(<App />);
