import SideBar from '../components/SideBar/SideBar';
import TitleBar from '../components/TitleBar/TitleBar';
import Cadastro from '../components/Cadastro/Cadastro';

function RouteCadastro() {
  
  return (
      <div className='flex-column'>
        <TitleBar />

        <Cadastro />
      </div>
  );
}

export default RouteCadastro;