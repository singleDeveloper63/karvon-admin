import React, { useEffect } from 'react';
import st from './category.module.scss';
import cl from 'classnames';
import { PageTitle } from '../../components';
import { Link } from 'react-router-dom';
import Waves from 'node-waves';

function AddCategory(){
    return(
        <Link to='/categories/add' className={cl(st.addcategory, "d-flex align-items-center addCatbtn")}><i className="bx bx-layer-plus"></i>&nbsp; qo'shish </Link>
    )
}


function Category(){

    useEffect(() => {
        Waves.init();
        Waves.attach('.addCatbtn','waves-effect')
    },[])

    return(
        <div>
            <PageTitle title="Kategoriyalar" subTitle="Karvon kategoriyalari bo'limi" component={<AddCategory/>}/>
            <div className={cl(st.category)}>

            </div>
        </div>
    )
}

export default Category;