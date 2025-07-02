// Import Assets
import profile from '../assets/profile3.png';
import { handleSmartEmailClick } from '../utils/emailUtils';

const Header = () => {
    const handleEmailClick = () => {
        handleSmartEmailClick();
    };

    return (
        <section className='header'>
            <img src={profile} alt="Silvio Meneguzzo" />

            <div className='header__content'>
                <h1>Hi, I'm Silvio Meneguzzo</h1>
                <p>Blockchain Researcher</p>
                <button onClick={handleEmailClick} className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;