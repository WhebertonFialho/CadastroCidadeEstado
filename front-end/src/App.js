import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { dynamicConfiguracao } from './config/config'
import { api } from './services/api';
import './scss/style.scss';

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

const App = () => {

  useEffect(() => {
    async function carregaConfiguracao() {
      axios.get(dynamicConfiguracao)
          .then((response) => {
            api.defaults.baseURL = response.data.apiURL;
            localStorage.setItem('caminhoBackEnd', response.data.apiURL);
          })
    }
    
    carregaConfiguracao();
  }, [])

  return (
      <Routes>
        <Route path="*" name="Home" element={ <DefaultLayout />  } />
      </Routes>
);
}

export default App;
