// Import Assets
import monolith from '../assets/monolith.png'
import jazz from '../assets/jazz.png'
import market from '../assets/ongoing.gif'
import b4a from '../assets/b4a.png'
import dao from '../assets/dao.jpeg'
import eudream from '../assets/eudream.jpg'
import swapfee from '../assets/swapfee.webp'
import efort from '../assets/efort.png'

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>EU-DREAM</h3>
                    <img src={eudream} alt="EU-DREAM" />
                    <p>A blockchain-powered digital twin architecture for consumer-centric energy systems. 
                       Combining DLT and Digital Twin technologies to achieve secure, transparent energy services. 
                       My focus involves implementing DLT components in digital twin architectures to boost consumer 
                       engagement in the energy transition, ensuring data integrity through blockchain anchoring.
                    </p>

                    <a href="https://eu-dream.eu/" target="_blank" rel="noreferrer" className="button">Project Site</a>
                    <a href="https://github.com/smeneguz/placeholder-repo" target="_blank" rel="noreferrer" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>eFORT</h3>
                    <img src={efort} alt="eFORT" />
                    <p>European project exploring resilient, fault-tolerant ledger mechanisms for critical energy infrastructures. 
                       Developed a Hyperledger Fabric-based blockchain architecture with four main organizations (DSO, TSO, Aggregator) 
                       managing energy trading, battery registration, and automated payments through smart contracts.
                    </p>

                    <a href="https://efort-project.eu/" target="_blank" rel="noreferrer" className="button">Project Site</a>
                    <a href="https://github.com/smeneguz/placeholder-repo" target="_blank" rel="noreferrer" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>DAO Sustainability Research</h3>
                    <img src={dao} alt="DAO Research" />
                    <p>Research on evaluating DAO sustainability and longevity through on-chain governance metrics. 
                       Developed a framework of Key Performance Indicators (KPIs) to measure governance efficiency, 
                       financial robustness, and community engagement. Applied to real-world DAOs using non-parametric analysis methods.
                    </p>

                    <a href="https://arxiv.org/abs/2504.11341" target="_blank" rel="noreferrer" className="button">Research Paper</a>
                    <a href="https://github.com/smeneguz/dao-portal" target="_blank" rel="noreferrer" className="button">Code</a>
                    <a href="http://130.192.84.45:8080/" target="_blank" rel="noreferrer" className="button">Live Portal</a>
                </div>

                <div className="projects__card">
                    <h3>SwapFee DApp</h3>
                    <img src={swapfee} alt="SwapFee" />
                    <p>3rd place winner at IOTA Hackathon. Revolutionary DApp enabling users to pay gas fees with custom tokens 
                       instead of native IOTA tokens. Leverages IOTA's Sponsored Transactions and Programmable Transactions 
                       to eliminate barriers for new users entering the blockchain ecosystem.
                    </p>

                    <a href="https://www.youtube.com/watch?v=yjeIL4L9lGI&ab_channel=silviomeneguzzo" target="_blank" rel="noreferrer" className="button">Demo Video</a>
                    <a href="https://github.com/smeneguz/Swapfee-Dynamic-Gas" target="_blank" rel="noreferrer" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Blockchain for All (B4A)</h3>
                    <img src={b4a} alt="Blockchain for All" />
                    <p>PRIN project developing a decision-support system to guide SMEs in evaluating and adopting blockchain technologies. 
                       Focus on creating a decisional framework and web app for selecting the most suitable blockchain ecosystem 
                       based on specific use cases, supporting both technical and non-technical users.
                    </p>

                    <a href="https://github.com/smeneguz/placeholder-repo" target="_blank" rel="noreferrer" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Data Marketplace</h3>
                    <img src={market} alt="Data Marketplace" />
                    <p>Blockchain-based data marketplace integrating Ocean Protocol with IDSA for transparent, interoperable data exchange. 
                       Part of the DataCellar project, focusing on silo-free energy data exchange within GAIA-X framework. 
                       Data published as ERC721 NFTs & ERC20 datatokens with Compute-to-Data capabilities.
                    </p>

                    <a href="https://datacellarproject.eu/" target="_blank" rel="noreferrer" className="button">DataCellar Project</a>
                    <a href="https://github.com/smeneguz/Data-marketplace-blockchain" target="_blank" rel="noreferrer" className="button">Code</a>
                    <a href="https://oceanprotocol.com/" target="_blank" rel="noreferrer" className="button">Ocean Protocol</a>
                </div>

                <div className="projects__card">
                    <h3>Monolith</h3>
                    <img src={monolith} alt="Monolith" />
                    <p>Interactive SDK enabling creation of dynamic bubbles for Rocket.chat environments. 
                       Increases interactivity between chat users by adding new features accessible directly from conversations 
                       without external applications. Provides developers with APIs for creating custom bubbles 
                       and users with predefined interactive elements.
                    </p>

                    <a href="https://github.com/smeneguz/Monolith-Documentation" target="_blank" rel="noreferrer" className="button">Documentation</a>
                    <a href="https://github.com/smeneguz/monolith-sdk" target="_blank" rel="noreferrer" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Jazz Cloud</h3>
                    <img src={jazz} alt="Jazz Cloud" />
                    <p>Cloud-based system for Infineon Technologies enabling global exchange of test packets across sites. 
                       Developed as a plugin for Jazz test executor with functionalities for sharing, uploading, downloading 
                       and optimized file extraction. Features intuitive GUI and seamless integration with Jazz external tools 
                       to increase adoption worldwide.
                    </p>

                    <a href="https://thesis.unipd.it/bitstream/20.500.12608/9892/1/Meneguzzo_Silvio.pdf" target="_blank" rel="noreferrer" className="button">Thesis Documentation</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;