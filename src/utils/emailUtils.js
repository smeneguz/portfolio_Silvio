export const handleSmartEmailClick = (email = "meneguzzosilvio@gmail.com") => {
    const subject = "Portfolio Contact";
    const body = "Hi Silvio,\n\nI found your portfolio and would like to get in touch.\n\nBest regards";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Create a temporary anchor to trigger mailto
    const tempAnchor = document.createElement('a');
    tempAnchor.href = mailtoLink;
    tempAnchor.style.display = 'none';
    document.body.appendChild(tempAnchor);
    
    // Track if the page loses focus (indicates email client opened)
    let emailOpened = false;
    let focusTimer;
    
    const handleFocus = () => {
        emailOpened = true;
        window.removeEventListener('focus', handleFocus);
        if (focusTimer) clearTimeout(focusTimer);
    };
    
    const handleBlur = () => {
        // If page loses focus quickly, likely email client opened
        setTimeout(() => {
            emailOpened = true;
        }, 100);
    };
    
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);
    
    // Try to open email client
    tempAnchor.click();
    document.body.removeChild(tempAnchor);
    
    // Check after a delay if email client opened
    focusTimer = setTimeout(() => {
        window.removeEventListener('focus', handleFocus);
        window.removeEventListener('blur', handleBlur);
        
        if (!emailOpened) {
            // Email client didn't open, show fallback
            if (window.confirm(`Email client not available. Would you like to copy my email address?\n\n${email}\n\nClick OK to copy to clipboard.`)) {
                navigator.clipboard.writeText(email).then(() => {
                    alert(`Email address copied to clipboard:\n${email}`);
                }).catch(() => {
                    // Fallback if clipboard doesn't work
                    window.prompt("Copy this email address:", email);
                });
            }
        }
    }, 800);
};
