import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteCalendario from './pages/rotaCalendario';
import RouteSubPageCalendario from './pages/rotaSubCalendario';
import RouteCadastroPet from './pages/rotaCadastroPet';
import RoutePerfil from './pages/routePerfil';
import RouteLogin from './pages/rotaLogin';
import RouteAdmin from './pages/rotaAdmin';
import { dataRota }from'./components/Calendario/Calendario'

function RoutesApp(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <RouteLogin/> } />
        <Route path="/home" element= {<RouteCalendario/>} />
        <Route path="/compromissos/:data" element = {<RouteSubPageCalendario/>}/>
        <Route path="/pets/adicionar" element={ <RouteCadastroPet /> } />
        <Route path="/pets" element={ <RoutePerfil/> } />
        <Route path="/admin" element={ <RouteAdmin/> } />
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesApp;