// import modules
import { useState, useEffect } from 'react'

// import components
import Header from './components/Header.jsx'

//import media
import bannerVideo from '../assets/site-banner.mov';

// import styles
import './Home.css'

function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'BUMBOCLYATT';
    }, []);

    return (
        <div className='main'>
            <div className='banner'>
                <div className='headerContainer'>
                    <Header />
                </div>
                <div className='video'>
                    <video src={bannerVideo} type='video/mov' muted autoPlay loop />
                </div>
                <div className='overlayText'>
                    <p>GEEKAY</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
