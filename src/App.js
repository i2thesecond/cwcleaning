import React from 'react';

import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero';
import Services from './components/Services';
import Examples from './components/Examples';
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
	<div>
		<NavigationBar />
		<Hero />
		<Services />
		<Examples />
		<About />
		<Contact />
		<Footer />
	</div>
  );
}

export default App;
