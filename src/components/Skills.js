import { useState, useEffect } from 'react';

const Skills = () => {
    const [activeTooltip, setActiveTooltip] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleClickOutside = () => {
            if (isMobile && activeTooltip) {
                setActiveTooltip(null);
            }
        };

        if (isMobile) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [isMobile, activeTooltip]);

    const skillsData = {
        hardSkills: {
            programming: {
                title: "Programming & Fundamentals",
                skills: [
                    { name: "C/C++", story: "My very first programming languages at University of Padova - learnt through P1 and P2 courses. Foundation for understanding memory management" },
                    { name: "Java", story: "Built upon C++ knowledge during university - used extensively at Infineon internship for enterprise applications" },
                    { name: "JavaScript/TypeScript", story: "Full-stack development journey from jQuery to modern React/Node.js - daily driver for web development" },
                    { name: "Go", story: "Primary language for Hyperledger Fabric development - initially challenging transition from JavaScript, now love its simplicity" },
                    { name: "Python", story: "Data analysis for DAO research and blockchain scripts - perfect for rapid prototyping and research work" },
                    { name: "Solidity", story: "Smart contract development - learned through trial and error during hackathons (many expensive gas mistakes!)" },
                    { name: "Rust", story: "Currently exploring for next-gen blockchain development - steep learning curve but fascinating ownership concepts" }
                ]
            },
            blockchain: {
                title: "Blockchain & Distributed Systems",
                skills: [
                    { name: "Hyperledger Fabric", story: "Energy trading networks in eFORT project - chaincode development and consensus mechanisms" },
                    { name: "Cosmos SDK", story: "Document verification systems at Tradenet with Commercio.network and Tendermint consensus" },
                    { name: "Ocean Protocol", story: "Data marketplace integration in EU-DREAM - NFT creation and tokenisation for energy datasets" },
                    { name: "IOTA & Sui", story: "3rd place IOTA Hackathon with SwapFee DApp - sponsored transactions and programmable blocks" },
                    { name: "Smart Contracts", story: "Solidity contracts for automated payments and access control - optimisation through real-world debugging" },
                    { name: "IDSA Connectors", story: "Secure data exchange in DataCellar - bridging traditional APIs with blockchain systems" }
                ]
            },
            cryptography: {
                title: "Applied Cryptography (Learning)",
                skills: [
                    { name: "Zero-Knowledge Proofs", story: "Studying ZK-SNARKs and ZK-STARKs for privacy-preserving DAO governance - fascinated by the maths behind it" },
                    { name: "Multi-Party Computation", story: "Exploring secure computation protocols for energy data analysis - part of my research roadmap" },
                    { name: "Homomorphic Encryption", story: "Learning privacy-preserving computation techniques for sensitive data processing" },
                    { name: "Moon Math", story: "Currently studying this comprehensive resource on cryptographic foundations - challenging but rewarding mathematical journey" }
                ]
            },
            fundamentals: {
                title: "Computer Science Foundations",
                skills: [
                    { name: "Algorithms & Data Structures", story: "Core foundation from University of Padova - essential for efficient blockchain development and research" },
                    { name: "Docker & DevOps", story: "Containerising blockchain networks for EU projects - learned through necessity and many deployment failures" },
                    { name: "Git & Collaboration", story: "Daily workflow for research and open-source contributions - proper branching learned during Tradenet work" },
                    { name: "LaTeX & Academic Writing", story: "IEEE papers and thesis writing - initially frustrating, now appreciate the precise control" }
                ]
            }
        },
        softSkills: {
            research: {
                title: "Research Excellence",
                skills: [
                    { name: "Academic Writing", story: "IEEE COMPSAC and BRAINS publications - balancing technical depth with accessibility" },
                    { name: "Cross-disciplinary Research", story: "Bridging computer science, economics, and energy policy - requires constant learning" },
                    { name: "Data Analysis", story: "Statistical methods for DAO governance patterns - discovered surprising community participation trends" },
                    { name: "Peer Review", story: "Reviewing blockchain conference papers - eye-opening experience seeing research quality variations" }
                ]
            },
            leadership: {
                title: "Leadership & Community",
                skills: [
                    { name: "TEDx Organising", story: "Licensed organiser for TEDxSchio since 2018 - curated speakers from AI researchers to social entrepreneurs" },
                    { name: "Project Coordination", story: "Led teams at Red Babel and multi-country EU research workstreams" },
                    { name: "Community Building", story: "Former Startup Grind Padova Director - monthly events connecting local entrepreneurs" },
                    { name: "Public Speaking", story: "International conferences and industry events - initially terrifying, now genuinely enjoy audience engagement" }
                ]
            }
        }
    };

    const handleSkillInteraction = (categoryKey, skillIndex, event) => {
        if (isMobile) {
            event.preventDefault();
            const tooltipId = `${categoryKey}-${skillIndex}`;
            setActiveTooltip(activeTooltip === tooltipId ? null : tooltipId);
        } else {
            setActiveTooltip(`${categoryKey}-${skillIndex}`);
        }
    };

    const handleSkillLeave = () => {
        if (!isMobile) {
            setActiveTooltip(null);
        }
    };

    const renderSkillCategory = (category, categoryKey, isHardSkill = true) => (
        <div key={categoryKey} className='skills__category'>
            <h3>{category.title}</h3>
            <div className='skills__tags'>
                {category.skills.map((skill, index) => (
                    <div 
                        key={index}
                        className='skill-wrapper'
                        onMouseEnter={() => !isMobile && handleSkillInteraction(categoryKey, index)}
                        onMouseLeave={handleSkillLeave}
                        onClick={(e) => isMobile && handleSkillInteraction(categoryKey, index, e)}
                    >
                        <span className={`skill-tag ${isHardSkill ? 'hard-skill' : 'soft-skill'}`}>
                            {skill.name}
                        </span>
                        {activeTooltip === `${categoryKey}-${index}` && (
                            <div className='skill-tooltip'>
                                <p>{skill.story}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className='skills'>
            <h2>Skills & Expertise</h2>
            
            <div className='skills__content'>
                <div className='skills__section'>
                    <div className='skills__section-header'>
                        <h2 className='skills__section-title'>Hard Skills</h2>
                        <p className='skills__section-subtitle'>Technical competencies and specialized knowledge</p>
                    </div>
                    {Object.entries(skillsData.hardSkills).map(([key, category]) => 
                        renderSkillCategory(category, key, true)
                    )}
                </div>

                <div className='skills__section'>
                    <div className='skills__section-header'>
                        <h2 className='skills__section-title'>Soft Skills</h2>
                        <p className='skills__section-subtitle'>Leadership, collaboration, and professional abilities</p>
                    </div>
                    {Object.entries(skillsData.softSkills).map(([key, category]) => 
                        renderSkillCategory(category, key, false)
                    )}
                </div>
            </div>
        </section>
    );
}

export default Skills;
