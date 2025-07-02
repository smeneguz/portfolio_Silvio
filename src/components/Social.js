import { handleSmartEmailClick } from '../utils/emailUtils';

const Social = () => {
    const handleEmailClick = (e) => {
        e.preventDefault();
        handleSmartEmailClick();
    };

    return (
        <div className="social">
            <h2>Contact</h2>

            <button onClick={handleEmailClick} className="button">meneguzzosilvio@gmail.com</button>
            <a href="https://twitter.com/SilvioMeneguzzo" target="_blank"  rel="noreferrer" className="button">Twitter</a>
            <a href="https://www.linkedin.com/in/silvio-arras-meneguzzo/" target="_blank" rel="noreferrer" className="button">LinkedIn</a>
            <a href="https://github.com/smeneguz" target="_blank" rel="noreferrer" className="button">GitHub</a>
        </div>
    );
}

export default Social;