import { useState, useEffect } from 'react';
import airship from '../assets/airship.webp';

const AirshipJourney = () => {
    const [showLegend, setShowLegend] = useState(true);
    const [animationPhase, setAnimationPhase] = useState(0);

    useEffect(() => {
        // Show legend for 3 seconds, then start exploration
        const legendTimer = setTimeout(() => {
            setShowLegend(false);
        }, 3000);

        return () => clearTimeout(legendTimer);
    }, []);

    useEffect(() => {
        if (!showLegend) {
            // Start the exploration animation cycle
            const animationTimer = setInterval(() => {
                setAnimationPhase(prev => (prev + 1) % 8); // 8 different exploration points
            }, 4000); // Change position every 4 seconds

            return () => clearInterval(animationTimer);
        }
    }, [showLegend]);

    const getExplorationPosition = () => {
        if (showLegend) {
            // Initial position with legend
            return {
                left: '50px',
                top: '20%',
                transform: 'scale(1) rotate(0deg)',
                opacity: 1
            };
        }

        // Different exploration points around the viewport
        const explorationPoints = [
            { left: '10%', top: '15%', rotate: -3, scale: 0.9 },   // Top left
            { left: '70%', top: '25%', rotate: 5, scale: 1.0 },    // Top right
            { left: '20%', top: '45%', rotate: -2, scale: 0.95 },  // Mid left
            { left: '80%', top: '50%', rotate: 3, scale: 1.0 },    // Mid right
            { left: '30%', top: '70%', rotate: -4, scale: 0.9 },   // Bottom left
            { left: '60%', top: '75%', rotate: 2, scale: 0.95 },   // Bottom right
            { left: '45%', top: '30%', rotate: 1, scale: 1.0 },    // Center top
            { left: '15%', top: '60%', rotate: -1, scale: 0.9 }    // Left center
        ];

        const currentPoint = explorationPoints[animationPhase];
        
        return {
            left: currentPoint.left,
            top: currentPoint.top,
            transform: `scale(${currentPoint.scale}) rotate(${currentPoint.rotate}deg)`,
            opacity: 0.6
        };
    };

    return (
        <>
            <div 
                className="airship-journey"
                style={getExplorationPosition()}
            >
                <img src={airship} alt="Silvio the Explorer" />
                
                {showLegend && (
                    <div className="airship-legend">
                        <div className="legend-text">
                            Silvio, the Explorer
                        </div>
                        <div className="legend-subtitle">
                            Carried by Curiosity. Guided by Code.
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AirshipJourney;
