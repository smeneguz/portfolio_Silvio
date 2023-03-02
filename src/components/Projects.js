// Import Assets
import monolith from '../assets/monolith.png'
import jazz from '../assets/jazz.png'
import market from '../assets/ongoing.gif'

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Monolith</h3>
                    <img src={monolith} alt="Monolith " />
                    <p>The purpose of the project is to enable the creation of interactive bubbles, which
will function in the Rocket.chat environment. These bubbles will allow to
increase interactivity between chat users and will add new features accessible directly from the conversation without having to resort to opening different applications.
opening of different applications. The system will offer developers a set of
APIs to create and release new bubbles, and to end users the ability
to take advantage of a set of predefined bubbles.
                    </p>

                    <a href="https://github.com/smeneguz/Monolith-Documentation" target="_blank" rel="noreferrer" className="button">Doc.</a>
                    <a href="https://github.com/smeneguz/monolith-sdk" target="_blank" rel="noreferrer" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Jazz Cloud</h3>
                    <img src={jazz} alt="Jazz Cloud" />
                    <p>Carry out a feasibility study for the creation of a specifc cloud system, developed as a plugin, which would allow the exchange of test packets used and executed
on Jazz (parent tool - Test executor). The intent of Jazz Cloud is to add functionalities for sharing test packets, uploading, downloading and exporting (implementation of a support algorithm to optimize the correct
extraction of fles). All this by relying on a intuitive and dynamic GUI (Graphic User Interface).
Once the code was developed, and its correctness was proved, it was committed and made available to all the team. The access point to Jazz Cloud and its additional features, are reachable
through Jazz external tools. Jazz is a tool used all over the world within Infneon Technologies,
and Jazz Cloud aims to increase its diffusion by making it easier to use.

                    </p>

                    <a href="https://thesis.unipd.it/bitstream/20.500.12608/9892/1/Meneguzzo_Silvio.pdf" target="_blank" rel="noreferrer" className="button">Project Documentation</a>
                </div>

                <div className="projects__card">
                    <h3>Data Marketplace</h3>
                    <img src={market} alt="Data Marketplace" />
                    <p>Fork of Ocean Market and start customization. Data is published as interoperable ERC721 data NFTs & ERC20 datatokens. 
                        Compute-to-Data enables private data to be bought & sold. It's a decentralized exchange (DEX), tuned for data.
                    </p>

                    <a href="https://oceanprotocol.com/" target="_blank" rel="noreferrer"  className="button">Ref.</a>
                    <a href="https://github.com/smeneguz/Data-marketplace-blockchain" target="_blank" rel="noreferrer" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;