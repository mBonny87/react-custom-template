import React from 'react';
import './App.css';
import { PageExample } from './components/pages';

export const App = () : JSX.Element | null => (
  <div>
    <PageExample />
    <PageExample />
    <PageExample />
  </div>
);
