import background from '../../assets/mobile-splash.jpg';
import logo from '../../assets/logo.png';
import './Splash.css';

const Splash = () => {
  return (
    <div className="background" style={{backgroundImage: `url(${background})`}}>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Splash;

