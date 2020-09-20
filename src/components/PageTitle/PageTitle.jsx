import React from 'react';
import st from './pagetitle.module.scss';
import cl from 'classnames';

export default function PageTitle({ title,subTitle , component }){
    return(
        <div className={cl(st.title)} >
            <div className="d-flex justify-content-between">
            <div>
                <h5> {title} </h5>
                <p> {subTitle} </p>
            </div>
            <div>
                {
                    component
                }
            </div>
            </div>
        </div>
    )
}