import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Page from '../pages/Imprint';
import '../styles/index.css';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Page />
    </StrictMode>,
  );
}
