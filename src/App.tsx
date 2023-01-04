import type { Component } from 'solid-js'
import { useRoutes } from '@solidjs/router';
import { routes } from './router';
import './styles/main.css';

const App: Component = () => {
  const Route = useRoutes(routes);
  return (
    <Route />
  )
}

export default App
