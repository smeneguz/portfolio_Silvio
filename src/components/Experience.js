const Experience = () => {
    return (
        <section className="experience">
            <h2>Experience & Education</h2>

            <div className="experience__content">
                {/* Current Position */}
                <div className="experience__section">
                    <h3>Current Research & Work</h3>
                    
                    <div className="experience__item">
                        <div className="experience__header">
                            <h4>PhD in Blockchain and Distributed Ledger Technology</h4>
                            <span className="experience__period">2022 – 2025 (expected)</span>
                        </div>
                        <div className="experience__institution">University of Turin & LINKS Foundation</div>
                        <div className="experience__details">
                            <p><strong>Joint National Programme:</strong> University of Camerino, University of Turin, LINKS Foundation</p>
                            <p><strong>Visiting Research:</strong> Brunel University London (2024–2025) - Mathematical models for DAO longevity</p>
                            <div className="experience__highlights">
                                <span className="highlight">Energy Data Marketplaces</span>
                                <span className="highlight">DAO Governance & Sustainability</span>
                                <span className="highlight">Advanced Cryptographic Protocols</span>
                            </div>
                        </div>
                    </div>

                    <div className="experience__item">
                        <div className="experience__header">
                            <h4>Blockchain Researcher & Developer</h4>
                            <span className="experience__period">Dec 2022 – Present</span>
                        </div>
                        <div className="experience__institution">LINKS Foundation, Turin</div>
                        <div className="experience__details">
                            <p>Research on blockchain-based data marketplaces for energy and IoT domains. Contributing to European projects: EU-DREAM, DataCellar, eFORT, and B4A.</p>
                        </div>
                    </div>
                </div>

                {/* Professional Experience */}
                <div className="experience__section">
                    <h3>Professional Experience</h3>
                    
                    <div className="experience__item">
                        <div className="experience__header">
                            <h4>Software Engineer (Full Stack & Blockchain)</h4>
                            <span className="experience__period">Aug 2021 – Nov 2022</span>
                        </div>
                        <div className="experience__institution">Tradenet, Schio</div>
                        <div className="experience__details">
                            <p>Developed blockchain applications on Commercio.network (Cosmos SDK). Led R&D initiatives on distributed systems and smart contract security.</p>
                        </div>
                    </div>

                    <div className="experience__item">
                        <div className="experience__header">
                            <h4>Product Engineer (Internship)</h4>
                            <span className="experience__period">Jan 2021 – Jul 2021</span>
                        </div>
                        <div className="experience__institution">Infineon Technologies, Padua</div>
                        <div className="experience__details">
                            <p>Created a cloud-based system for exchanging test data among Infineon's global sites. Resulted in my Master's thesis project.</p>
                        </div>
                    </div>

                    <div className="experience__item">
                        <div className="experience__header">
                            <h4>Business Consultant (Internship)</h4>
                            <span className="experience__period">2018 – 2019</span>
                        </div>
                        <div className="experience__institution">Sopra Steria, Milan</div>
                        <div className="experience__details">
                            <p>Designed omnichannel strategies for finance and retail sectors. Conducted requirements analysis with cross-functional stakeholders.</p>
                        </div>
                    </div>

                    <div className="experience__item">
                        <div className="experience__header">
                            <h4>Project Manager</h4>
                            <span className="experience__period">2017</span>
                        </div>
                        <div className="experience__institution">Red Babel</div>
                        <div className="experience__details">
                            <p>Managed a team of seven developers creating the "Monolith SDK" for Meteor and Rocket.Chat integration.</p>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="experience__section">
                    <h3>Education</h3>
                    
                    <div className="experience__item">
                        <div className="experience__header">
                            <h4>PhD in Blockchain and Distributed Ledger Technology</h4>
                            <span className="experience__period">2022 – 2025 (expected)</span>
                        </div>
                        <div className="experience__institution">University of Turin, University of Camerino & LINKS Foundation</div>
                        <div className="experience__details">
                            <p><strong>Joint National Programme:</strong> Collaborative PhD between University of Camerino, University of Turin, and LINKS Foundation</p>
                            <p><strong>Research Focus:</strong> Energy data marketplaces using Ocean Protocol and IDSA frameworks, DAO governance sustainability, and advanced cryptographic protocols (ZK-proofs, MPC, FHE)</p>
                            <p><strong>Visiting Research:</strong> Brunel University London (2024–2025) - Mathematical models for DAO longevity under Prof. Giuseppe Destefanis and Prof. Claudio Schifanella</p>
                            <div className="experience__highlights">
                                <span className="highlight">Blockchain Data Marketplaces</span>
                                <span className="highlight">DAO Sustainability</span>
                                <span className="highlight">Cryptographic Protocols</span>
                                <span className="highlight">Energy Systems</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="experience__item">
                        <div className="experience__header">
                            <h4>MSc in ICT for Internet and Multimedia</h4>
                            <span className="experience__period">2019 – 2022</span>
                        </div>
                        <div className="experience__institution">University of Padova</div>
                        <div className="experience__details">
                            <p><strong>Thesis:</strong> Design and Implementation of a Cloud-based Test Executor of Microcontroller Algorithms (collaboration with Infineon Technologies)</p>
                        </div>
                    </div>

                    <div className="experience__item">
                        <div className="experience__header">
                            <h4>BSc in Computer Science and Mathematics</h4>
                            <span className="experience__period">2014 – 2018</span>
                        </div>
                        <div className="experience__institution">University of Padova</div>
                        <div className="experience__details">
                            <p>Foundation in programming (C/C++ through P1 and P2 courses), algorithms, and mathematical foundations of computer science.</p>
                        </div>
                    </div>
                </div>

                {/* Community Leadership */}
                <div className="experience__section">
                    <h3>Community & Leadership</h3>
                    
                    <div className="experience__item">
                        <div className="experience__header">
                            <h4>TEDxSchio Organiser & Licensee</h4>
                            <span className="experience__period">2018 – Present</span>
                        </div>
                        <div className="experience__institution">TEDx</div>
                        <div className="experience__details">
                            <p>Curate local TEDx events, managing speaker recruitment, sponsor relationships, and community engagement.</p>
                        </div>
                    </div>

                    <div className="experience__item">
                        <div className="experience__header">
                            <h4>Startup Grind Padova Chapter Director</h4>
                            <span className="experience__period">2019 – 2023</span>
                        </div>
                        <div className="experience__institution">Startup Grind</div>
                        <div className="experience__details">
                            <p>Hosted entrepreneurial meetups and workshops, facilitating knowledge-sharing with industry leaders and investors.</p>
                        </div>
                    </div>
                </div>

                {/* Notable Achievements */}
                <div className="experience__section">
                    <h3>Recent Achievements</h3>
                    
                    <div className="experience__achievements">
                        <div className="achievement">
                            <strong>IOTA Hackathon 3rd Place</strong> (2024) - SwapFee DApp
                        </div>
                        <div className="achievement">
                            <strong>Ocean Protocol Ambassador</strong> (2023) - Community contributions
                        </div>
                        <div className="achievement">
                            <strong>Workshop Chair</strong> (2025) - IEEE COMPSAC 2025, Ethereum Foundation Program
                        </div>
                        <div className="achievement">
                            <strong>Invited Speaker</strong> (2025) - CrypTO Conference, AIOTI Webinar, multiple international venues
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;