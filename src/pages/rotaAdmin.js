import SideBar from '../components/SideBar/SideBar';
import TitleBar from '../components/TitleBar/TitleBar';
import Admin from '../components/Admin/Admin';

function RouteAdmin() {
  
  return (
    <div className="flex-row">
      <div>
        <SideBar option4={"selected"}/>
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <Admin />
      </div>
    </div>
  );
}

export default RouteAdmin;