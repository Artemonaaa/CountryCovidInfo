import covidPng from './../../img/logo.png'
import './header.css'

const Header = () => {
   return (
      <div className='header'>
         <div className='logo-static'>
            <img className='logo' src={covidPng} alt="covid" />
            <h1 className='static'>STATISTIC</h1>
         </div>
      </div>
   );
}

export default Header;
