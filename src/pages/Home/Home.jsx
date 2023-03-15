import { Link } from "react-router-dom";

import Banner from "../../components/Banner/Banner";
import PiggyBank from "../../components/PiggyBank/PiggyBank";

const Home = ({currentCategory}) => {
    return (
        <>
            <Banner />
            <PiggyBank />
            <h2>Category: {currentCategory}</h2>
            <button><Link to='/gamepage'>Continue Trivia</Link></button>
            <button><Link to='/categories'>Change Category</Link></button>
        </>
    );
}

export default Home;