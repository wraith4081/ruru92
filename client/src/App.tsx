import { useAuth } from 'context/AuthContext';
import React from 'react';

import {useRoutes} from 'react-router-dom'
import routes from 'routes';

function App() {
  const {theme} = useAuth();

  React.useEffect(() => {
    if (theme == 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);


  return useRoutes(routes);
}

export default App;
