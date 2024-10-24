import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import './Layout.css';

function Layout({ tab, setTab, products, carts, setToken }) {
    return (
        <div className='layout-container'>
            <div className='header-container'>
                <h1>
                    <span className='badge bg-dark'>CSI 205 Front End Software Development</span>
                </h1>
            </div>
            <Navbar tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken}/>
            <Outlet />
            <div className='footer-container'>
                <h2>
                    <span className='badge bg-dark'>SPU</span>
                    &nbsp;&minus;&nbsp;
                    <span className='badge bg-secondary'>SIT</span>
                    &nbsp;&minus;&nbsp;
                    <span className='badge bg-info'>CSI</span>
                </h2>
            </div>
        </div>
    );
}

export default Layout;