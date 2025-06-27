import { useState } from 'react';

const Web3Badge = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div 
            className="web3-badge"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
        >
            <div className="web3-badge__content">
                <span className="web3-badge__icon">🌐</span>
                <span className="web3-badge__text">Decentralised Web</span>
            </div>
            
            {showTooltip && (
                <div className="web3-badge__tooltip">
                    <div className="tooltip__content">
                        <h4>Built for the Future</h4>
                        <p>This portfolio is hosted on <strong>IPFS</strong> (InterPlanetary File System) - a distributed, peer-to-peer protocol that creates a resilient and censorship-resistant web.</p>
                        <p>Accessible via <strong>ENS</strong> (Ethereum Name Service) domains, providing decentralised, blockchain-based naming that you truly own.</p>
                        <div className="tooltip__features">
                            <span className="feature">📡 Distributed Storage</span>
                            <span className="feature">🔒 Censorship Resistant</span>
                            <span className="feature">🌍 Global Network</span>
                            <span className="feature">🔑 True Ownership</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Web3Badge;
