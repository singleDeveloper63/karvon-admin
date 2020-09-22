import React, { useEffect, useState }  from 'react';
import { PageTitle , TreeSelect , Loader } from '../../../components';
import st from './addCategory.module.scss';
import cl from 'classnames';
import { Link } from 'react-router-dom';
import { categoryApi } from '../../../api/category';

function AddCategory(){

    useEffect(() => {
        categoryApi.getCategory()
            .then( res => {
                setCategories(res.data.categoryList)
                setLoading(false)
            })
            .catch( err => console.log(err))
    },[])

    const [categories , setCategories] = useState([]);
    const [loading,setLoading] = useState(true);
    const [data, setData] = useState({
        nameuz : "",
        nameru : "",
        parentId : ""
    })
    return(
        <div className={cl(st.relative)}>
            <PageTitle title="Kategoriya qo'shish" subTitle="Asosiy yoki sub kategoriya qoshish"
            component={ <Link to='/categories' className={cl(st.back)}> <i className="bx bx-arrow-back"></i> Orqaga</Link> }/>
            {
                loading ? <Loader/> : 
            <div className={cl(st.addCategory)}>
                <form onSubmit={ createCategory }>

                    <div className="row">
                        <div className="col-12 my-2 ">
                            <div className="form-group">
                                <label htmlFor="">Sarlavha (ru)</label>
                                <input onChange={ e => setData({...data, nameru : e.target.value})} placeholder="Игрушки..." type="text" className="form-control"/>
                            </div>
                        </div>


                        <div className="col-12 my-2">
                            <div className="form-group">
                                <label htmlFor="">Sarlavha (uz)</label>
                                <input onChange={ e => setData({...data, nameuz : e.target.value})} placeholder="O'yinchoqlar..." type="text" className="form-control"/>
                            </div>
                        </div>


                        <div className="form-group my-2">
                            <label htmlFor="category">Asosiy kategoriyani tanlash</label>
                            <TreeSelect id="category" placeholder="Kategoriyani tanlash" data={categories}  onChange={ val => {
                                setData({...data,parentId : val})
                            } }/>                            
                            <button className={cl(st.addCategory_submit,"d-flex align-items-center justify-content-center")}><i className="bx bx-plus mr-1"></i> Qo'shish </button>
                        </div>
                    </div>

                </form>
            </div>
            }
        </div>
    )


    function createCategory(e){
        e.preventDefault();
        categoryApi.addCategory(data)
            .then( res => console.log(res))
            .catch( err => console.log(err))
    }
}


export default AddCategory;