import SideBar from '../components/SideBar/SideBar';
import TitleBar from '../components/TitleBar/TitleBar';
import CadastroPet from '../components/CadastroPet/CadastroPet';

function routeCadastroPet() {
  return (
    <div className="flex-row">
      <div>
        <SideBar option3={"selected"}/>
      </div>

      <div className='flex-column' style={{ paddingLeft: '15rem' }}>
        <TitleBar />

        <CadastroPet />
      </div>
    </div>
  );
}

export default routeCadastroPet;