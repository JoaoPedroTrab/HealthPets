import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteCalendario from '../presentation/pages/rotaCalendario';
import RouteSubPageCalendario from '../presentation/pages/rotaSubCalendario';
import RouteCadastroPet from '../presentation/pages/rotaCadastroPet';
import RoutePerfil from '../presentation/pages/routePerfil';
import RouteLogin from '../presentation/pages/rotaLogin';
import RouteAdmin from '../presentation/pages/rotaAdmin';
import RouteCadastro from '../presentation/pages/rotaCadastro';
import { dataRota } from '../presentation/components/Calendario/Calendario';

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
        <Route path="/cadastro" element={<RouteCadastro/>} />  
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesApp;