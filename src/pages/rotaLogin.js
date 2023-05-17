import TitleBar from '../components/TitleBar/TitleBar';
import Login from '../components/Login/Login';

function routeLogin() {
  return (
    <div className='flex-column'>
        <TitleBar />

        <Login />
      </div>
  );
}

export default routeLogin;