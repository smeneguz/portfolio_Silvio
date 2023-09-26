// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Silvio Meneguzzo" />

            <div className='header__content'>
                <h1>Hi, I'm Silvio Meneguzzo</h1>
                <p>Blockchain Researcher</p>
                <a href="mailto:meneguzzosilvio@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;