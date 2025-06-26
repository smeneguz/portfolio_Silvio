const Skills = () => {
    return (
        <section className='skills'>
            <h2>Skills & Expertise</h2>
            
            <div className='skills__content'>
                <div className='skills__category'>
                    <h3>Blockchain & DLT</h3>
                    <div className='skills__tags'>
                        <span>Cosmos SDK</span>
                        <span>Hyperledger Fabric</span>
                        <span>Ocean Protocol</span>
                        <span>IDSA Connectors</span>
                        <span>Smart Contracts</span>
                        <span>Solidity</span>
                        <span>Zero-Knowledge Proofs</span>
                        <span>Multi-Party Computation</span>
                    </div>
                </div>

                <div className='skills__category'>
                    <h3>Programming</h3>
                    <div className='skills__tags'>
                        <span>JavaScript</span>
                        <span>Go</span>
                        <span>Python</span>
                        <span>Java</span>
                        <span>Rust</span>
                        <span>C/C++</span>
                        <span>React</span>
                        <span>Node.js</span>
                    </div>
                </div>

                <div className='skills__category'>
                    <h3>Research & Academic</h3>
                    <div className='skills__tags'>
                        <span>Academic Writing</span>
                        <span>LaTeX</span>
                        <span>Data Privacy</span>
                        <span>GDPR</span>
                        <span>Quantitative Methods</span>
                        <span>Peer Review</span>
                    </div>
                </div>

                <div className='skills__category'>
                    <h3>Leadership & Community</h3>
                    <div className='skills__tags'>
                        <span>TEDx Organising</span>
                        <span>Startup Grind</span>
                        <span>Project Management</span>
                        <span>Community Building</span>
                        <span>Public Speaking</span>
                        <span>Mentoring</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
