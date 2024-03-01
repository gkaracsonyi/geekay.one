import { useNavigate } from 'react-router-dom';

import './Header.css'
import gitHubLogo from '../../assets/github.svg';

function Header() {
    const navigate = useNavigate();

    const goTo = (dest = '') => {
        navigate(`${dest}`);
    };

    const redir = (dest = '') => {
        window.open(dest)
    }

    return (
        <div className='header'>
            <div className='header--logo'>
                <button className='logo'>GEEKAY</button>
            </div>
            <div className='header--menu'>
                <button>Projects</button>
                <button>Video</button>
                <button>About</button>
            </div>
            <div className='header--social'>
                <button onClick={() => redir('https://github.com/gkaracsonyi')}>
                    <img src={gitHubLogo} alt='githublogo' />
                </button>
            </div>
        </div>
    )
};

export default Header;