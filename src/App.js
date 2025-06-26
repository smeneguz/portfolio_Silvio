// Import Components
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Social from './components/Social';
import Footer from './components/Footer';
import AirshipJourney from './components/AirshipJourney';

function App() {
	return (
		<div className="App">
			<AirshipJourney />
			<Header />
			<About />
			<Skills />
			<Projects />
			<Experience />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
