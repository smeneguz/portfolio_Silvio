const Social = () => {
    const handleEmailClick = (e) => {
        e.preventDefault();
        
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
        <div className="social">
            <h2>Socials</h2>

            <button onClick={handleEmailClick} className="button">meneguzzosilvio@gmail.com</button>
            <a href="https://twitter.com/SilvioMeneguzzo" target="_blank"  rel="noreferrer" className="button">Twitter</a>
            <a href="https://www.linkedin.com/in/silvio-arras-meneguzzo/" target="_blank" rel="noreferrer" className="button">LinkedIn</a>
            <a href="https://github.com/smeneguz" target="_blank" rel="noreferrer" className="button">GitHub</a>
        </div>
    );
}

export default Social;