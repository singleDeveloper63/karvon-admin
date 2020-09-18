import React, { useEffect } from 'react';
import st from './sidebar.module.scss';
import cl from 'classnames';
import Waves from 'node-waves';
import { NavLink } from 'react-router-dom';

function Sidebar({id , isOpen , overlayClick }){


    useEffect(() => {
       Waves.init() ;
       Waves.attach('#closer','waves-effect')
    },[])

    const data = [
        { title : "Statistika" , icon : "pie-chart-alt-2" , to : '/dashboard'},
        { title : "Kategoriyalar" , icon : "package" , to : '/categories'},
        { title : "Mahsulotlar" , icon : "grid-alt" , to : '/products'},
        { title : "Buyurtmalar" , icon : "cart" , to : '/orders'},
        { title : "Foydalanuvchilar" , icon : "group" , to : '/users'},
        { title : "Sotuvchilar" , icon : "user-pin" , to : '/sellers'},
        { title : "Akciyalar", icon : "purchase-tag" , to : '/sale'},
        { title : "Sahifalar" , icon : "window-alt" , to : '/pages'}
    ]

    return(
        <div>
            <div className={cl(st.sidebar,isOpen && cl(st.open))} id={id}>
                <div className={cl(st.sidebar_menu)}>
                    <button onClick={ overlayClick } className={cl(st.closer)} id="closer"> &times; </button>
                    <NavLink to='/' className={cl(st.sidebar_menu_title)}>Karvon</NavLink>
                    {
                        data.map( (item,index) => {
                            return(
                                <NavLink key={index} to={item.to} className={cl(st.sidebar_menu_link)} activeClassName={cl(st.sidebar_menu_link_active)}>
                                    <i className={`bx bx-${item.icon}`}></i>
                                    <span className={cl(st.sidebar_menu_link_title)}> {item.title} </span>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
            {
                isOpen && <div onClick={ overlayClick } className={cl(st.overlay)}></div>
            }
        </div>
    )
}

export default Sidebar;