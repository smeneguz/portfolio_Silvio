// Import Assets
import profile from '../assets/profile3.png';

const Header = () => {
    const handleEmailClick = (e) => {
        // Try to open the email client
        const mailtoLink = "mailto:meneguzzosilvio@gmail.com?subject=Portfolio%20Contact&body=Hi%20Silvio,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0D%0A%0D%0ABest%20regards";
        window.location.href = mailtoLink;
        
        // Fallback: show email address after a short delay
        setTimeout(() => {
            if (window.confirm("If your email client didn't open, you can copy this email address:\n\nmeneguzzosilvio@gmail.com\n\nClick OK to copy to clipboard.")) {
                navigator.clipboard.writeText("meneguzzosilvio@gmail.com").catch(() => {
                    // Fallback if clipboard API doesn't work
                    window.prompt("Copy this email address:", "meneguzzosilvio@gmail.com");
                });
            }
        }, 1500);
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