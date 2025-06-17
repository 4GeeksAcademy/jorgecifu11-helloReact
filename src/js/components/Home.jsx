
import Navbar from "./Navbar.jsx";

import { Jumbotron } from "./Jumbotron.jsx";

import { Card } from "./Card.jsx";

import Footer from "./Footer.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">

			<Navbar />
			<Jumbotron />
			<div className= "d-flex justify-content-between container mx-auto mt-4 row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer/>
		</div>
	);
};

export default Home;