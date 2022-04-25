import { useLocation, useNavigate } from 'react-router-dom';
// Bootstrap
import { Container, Navbar } from 'react-bootstrap';
import { LOGO_DARK } from '../../utils/constants';
// Hooks
import useLocalStorage from '../../hooks/useLocalStorage';
// css
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo, setUserInfo] = useLocalStorage('userInfo');

  const handleSignout = () => {
    setUserInfo(null);
    navigate('/login');
  };

  if (
    // location.pathname === "/" ||
    location.pathname === '/login' ||
    location.pathname === '/register'
  ) {
    return null;
  }

  return (
    <header className='border__visfin border__visfin--bottom'>
      <Navbar bg='light'>
        <Container>
          <div className='header'>
            <div className='header__logo'>
              <Navbar.Brand href='/'>
                <img src={LOGO_DARK} alt='VisFin Logo' />
              </Navbar.Brand>
            </div>
            <div className='header__user'>
              <div className='header__userInfo'>test</div>
              <h6 onClick={handleSignout} className='header__signout'>
                Signout
              </h6>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
