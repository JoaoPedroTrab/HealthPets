import SideBar from '../components/SideBar/SideBar';
import TitleBar from '../components/TitleBar/TitleBar';
import Calendario from '../components/Calendario/Calendario';

function routeCalendario() {
  return (
    <div className="flex-row">
      <div>
        <SideBar option1={"selected"}/>
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <Calendario />
      </div>
    </div>
  );
}

export default routeCalendario;