import SideBar from '../components/SideBar/SideBar';
import TitleBar from '../components/TitleBar/TitleBar';
import SubPageCalendario from '../components/CalendarioSubPage/CalendarioSubPage';

function routeSubPageCalendario() {
  return (
    <div className="flex-row">
      <div>
        <SideBar option1={"selected"}/>
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <SubPageCalendario />
      </div>
    </div>
  );
}

export default routeSubPageCalendario;