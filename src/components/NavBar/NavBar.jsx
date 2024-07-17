import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleNewVideoClick = () => {
        navigate('/form'); 
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                Mi-Flix
            </div>
            <div className="navbar-buttons">
                <button className="btn-home" onClick={handleHomeClick}>
                    <span className="icon-home"></span>
                    HOME
                </button>
                <button className="btn-new-video" onClick={handleNewVideoClick}>
                    NUEVO VIDEO
                </button>
                <div className="form-icon" onClick={handleNewVideoClick}>
                    <img src="/public/img/add_circle.svg" alt="Imagen del círculo para formulario" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
