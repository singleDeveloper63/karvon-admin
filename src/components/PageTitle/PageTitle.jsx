import React from 'react';
import st from './pagetitle.module.scss';
import cl from 'classnames';

export default function PageTitle({ title,subTitle }){
    return(
        <div className={cl(st.title)}>
            <h5> {title} </h5>
            <p> {subTitle} </p>
        </div>
    )
}