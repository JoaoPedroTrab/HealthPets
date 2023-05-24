import SideBar from '../components/SideBar/SideBar';
import TitleBar from '../components/TitleBar/TitleBar';
import Perfil  from '../components/Perfil/Perfil';

function routePerfil() {
  return (
    <div className="flex-row">
      <div>
        <SideBar option2={"selected"}/>
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <Perfil />
      </div>
    </div>
  );
}

export default routePerfil;