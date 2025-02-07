import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../styles/main.css';

export default function Layout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="main-container">
            <nav className="sidebar">
                <div className="sb-header">
                    <img
                        src="/logo-sb-footer.svg"
                        alt="Logo Superintendencia"
                        className="sb-logo"
                    />
                </div>

                <Link to="/" className="nav-link">
                    <img
                        src="/logo.svg"
                        alt="Ícono de inicio"
                        className="home-icon"
                    />
                    <span>Inicio</span>
                </Link>
                
                <Link to="/consulta" className="nav-link">Consulta</Link>
                <Link to="/crear-registro" className="nav-link">Crear registro</Link>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </nav>

            <div style={{ flex: 1 }}>
                <div className="header">
                    Portal de Entidades Gubernamentales
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
