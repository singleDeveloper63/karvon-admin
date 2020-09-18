import React, { useEffect, useState  } from 'react';
import Navbar from './Navbar/navbar';
import Sidebar from './Sidebar/sidebar';
import st from './index.module.scss';
import cl from 'classnames';

function AppLayout({ children }){
    const [open , setOpen] = useState(true);
    useEffect(() => {
        let size = window.innerWidth;
        size < 1101 && setOpen(false)
    },[])
    return(
        <div>
            <Navbar isOpen={ open } onToggle={ () => setOpen(!open)} id="navbar"/>
            <Sidebar isOpen={ open } overlayClick={ () => setOpen(!open)} canOverlayVisible={ open } id="sidebar"/>
            <div className={ cl(st.content , open && st.open)}>
                {
                    children
                }
            </div>
        </div>
    )
}

export default AppLayout;