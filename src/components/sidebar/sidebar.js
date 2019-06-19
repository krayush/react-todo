import React from 'react';
import './sidebar.css';

class Sidebar extends React.Component {
    render() {
        return <nav>
            <ul className="nav">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contacts</li>
            </ul>
        </nav>
    }
}

export default Sidebar;