import React, { useEffect, useState } from 'react';
import st from './category.module.scss';
import cl from 'classnames';
import { PageTitle , Loader } from '../../components';
import { Link } from 'react-router-dom';
import Waves from 'node-waves';
import { categoryApi } from '../../api/category';

function AddCategory(){
    return(
        <Link to='/categories/add' className={cl(st.addcategory, "d-flex align-items-center addCatbtn")}><i className="bx bx-layer-plus"></i>&nbsp; qo'shish </Link>
    )
}


function Category(){

    const [categories, setCategories] = useState([]);
    const [request, setRequest] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Waves.init();
        Waves.attach('.addCatbtn','waves-effect');
        categoryApi.getCategory()
            .then( res => {
                setCategories(res.data.categoryList);
                setRequest(false)
            })
    },[])

    return(
        <div className={cl(st.relative)}>
            <PageTitle title="Kategoriyalar" subTitle="Karvon kategoriyalari bo'limi" component={<AddCategory/>}/>
            {
                request ? <Loader/> : 
                <div className={cl(st.category)}>
                    <ul className={cl(st.category_table)}>
                        <CategoryList data={categories} order={0}/>
                    </ul>
                </div>
            }
        </div>
    )
}

function CategoryList({data , onChange , onDelete , order}){

    useEffect(() => {
        Waves.init();
        Waves.attach('.catLabel',['waves-effect','waves-block'])
        Waves.attach('.catLabel button','waves-effect')
    },[])
    return(
        data.map((item,index) => {
            return (
            <li key={index} className={cl(st.category_table_item)}>
                <div className={ cl(st.category_table_item_label,'catLabel') }>
                    <div>
                        {item.children.length > 0 ? <i className={cl("bx bx-plus")} data-toggle="collapse" data-target={`#children-${index}${order}`}></i> : null } 
                        <label > {item.name.uz} </label>
                    </div>
                    <div className="d-inline-block ml-auto">
                        <button className={st.edit}><i className="bx bx-pencil"></i></button>
                        <button className={st.delete}><i className="bx bx-trash"></i></button>
                    </div>
                </div>
                {
                    item.children.length>0 ? 
                    <ul className="collapse" id={`children-${index}${order}`}>
                        <CategoryList data={item.children} order={order+1}/>
                    </ul> : null
                }
            </li>
            )
        })
    )
}
export default Category;