import './Header.css';
import Github from './icons/Github';
import FrontendMentor from './icons/FrontendMentor';
import Linkedin from './icons/Linkedin';
import Twitter from './icons/Twitter';

function Header() {
  return (
    <div className='header'>
        <div className='name'>adamkeys</div>
        <div className='icons'>
          <Github />
          <FrontendMentor />
          <Linkedin />
          <Twitter />
        </div>
    </div>
  )
}

export default Header