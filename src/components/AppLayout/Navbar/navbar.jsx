import React , { useEffect } from 'react';
import st from './navbar.module.scss';
import cl from 'classnames';
import Waves from 'node-waves';

function Navbar({onToggle , id , isOpen }){

    useEffect(() => {
        Waves.init();
        Waves.attach('.navigation button','waves-effect')
    },[])

    return(
        <div className={cl(st.navbar,"navigation",isOpen && cl(st.open))} id={id}>

            <button onClick={ onToggle } className={cl(st.navbar_toggler)}>
                <i className="bx bx-menu-alt-right"></i>    
            </button>

            <input placeholder="Izlash..." type="search" className={cl(st.navbar_search)}/>

            <div className="dropdown" className={cl(st.navbar_drop)}>
                <button className={cl("dropdown-toggle",st.navbar_drop_toggle)} data-toggle="dropdown">
                    <i className="bx bx-user-circle"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <a href="#" className="dropdown-item"><i className="bx bx-fw bx-user-check"></i> Profil </a>
                    <a href="#" className="dropdown-item"><i className="bx bx-fw bx-log-out-circle"></i> Chiqish </a>
                </div>
            </div>

        </div>
    )
}

export default Navbar;