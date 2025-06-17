
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
				<Card title={"Perro"} img={"https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg"}/>
				<Card title={"Gato"} img={"https://cdn.pixabay.com/photo/2017/03/27/12/40/ship-2178449_1280.jpg"}/>
				<Card title={"Loro"} img={"https://cdn.pixabay.com/photo/2016/11/19/16/36/mountain-climbing-1840220_1280.jpg"}/>
				<Card title={"Oso"} img={"https://cdn.pixabay.com/photo/2017/03/27/12/11/boy-2178303_1280.jpg"}/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;