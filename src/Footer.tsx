import './Footer.css';
import Header from './Header';
import HorizontalLine from './HorizontalLine';

function Footer() {
    const handleSubmit = () => {

    }

  return (
    <div className='footer'>
        <div className='footerContainer'>
            <div className='contact'>
                <div className='contactTitle'>Contact</div>
                <div className='contactDescription'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</div>
            </div>
            <div className='contactForm'>
                <div className="inputContainer">
                    <input type="text" className="bottomBorder" placeholder='NAME' />
                </div>
                <div className="inputContainer">
                    <input type="text" className="bottomBorder" placeholder='EMAIL' />
                </div>
                <div className="inputContainer" >
                    <input type="text" className="bottomBorder" placeholder='MESSAGE' style={{height: '90px'}}/>
                </div>
                <div className='sendMessageContainer'>
                    <div className='sendMessage' style={{marginTop: '66px'}}>SEND MESSAGE</div>
                </div>
            </div>
        </div>
        <HorizontalLine />
        <Header />
    </div>
  )
}

export default Footer