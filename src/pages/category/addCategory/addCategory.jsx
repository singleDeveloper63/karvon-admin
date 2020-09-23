import React, { useEffect, useState }  from 'react';
import { PageTitle , TreeSelect , Loader } from '../../../components';
import st from './addCategory.module.scss';
import cl from 'classnames';
import { Link } from 'react-router-dom';
import { categoryApi } from '../../../api/category';
import Swal from 'sweetalert2';

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
    const [request,setRequest] = useState(false);
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
                                <label htmlFor="nameru">Sarlavha (ru)</label>
                                <input id="nameru" required onChange={ e => setData({...data, nameru : e.target.value})} placeholder="Игрушки..." type="text" className="form-control"/>
                            </div>
                        </div>


                        <div className="col-12 my-2">
                            <div className="form-group">
                                <label htmlFor="nameuz">Sarlavha (uz)</label>
                                <input id="nameuz" required onChange={ e => setData({...data, nameuz : e.target.value})} placeholder="O'yinchoqlar..." type="text" className="form-control"/>
                            </div>
                        </div>


                        <div className="form-group my-2">
                            <label htmlFor="category">Asosiy kategoriyani tanlash</label>
                            <TreeSelect id="category" placeholder="Kategoriyani tanlash" data={categories}  onChange={ val => {
                                setData({...data,parentId : val})
                            } }/>                            
                            <button disabled={ request } className={cl(st.addCategory_submit,"d-flex align-items-center justify-content-center")}>
                                <i className="bx bx-plus mr-1"></i> Qo'shish &nbsp;{ request && <i className="bx bx-loader-alt bx-spin"></i> }
                            </button>
                        </div>
                    </div>

                </form>
            </div>
            }
        </div>
    )


    function createCategory(e){
        e.preventDefault();
        setRequest(true)
        categoryApi.addCategory(data)
            .then( res => {
                categoryApi.getCategory()
                    .then( res => {
                        setCategories(res.data.categoryList)
                        setRequest(false);
                        Swal.fire("Muvoffaqiyatli","Kategoriya muvoffaqiyatli qo'shildi","success");
                    })
                    .catch( err => console.log(err))
                
        
            })
            .catch( err => {
                setRequest(false);
                Swal.fire("Xatolik","Kategoriya allaqachon mavjud","error")
            })
    }
}


export default AddCategory;