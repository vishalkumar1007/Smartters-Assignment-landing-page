import './Landing.css'
import Navbar from "../../components/Navbar/Navbar";
import Sections from '../../components/Sections/Sections';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';

const Landing = ()=>{
    return(
        <div className="Landing_main">
            <Navbar/>
            <Sections/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default Landing;