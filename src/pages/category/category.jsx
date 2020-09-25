import React, { useEffect, useState } from 'react';
import st from './category.module.scss';
import cl from 'classnames';
import { PageTitle , Loader } from '../../components';
import { Link } from 'react-router-dom';
import Waves from 'node-waves';
import Swal from 'sweetalert2';
import nocategory from '../../assets/images/nocategory.svg';
import { categoryApi } from '../../api/category';
import withReactContent from 'sweetalert2-react-content';

const Alert = withReactContent(Swal);

function AddCategory(){
    return(
        <Link to='/categories/add' className={cl(st.addcategory, "d-flex align-items-center addCatbtn")}><i className="bx bx-layer-plus"></i>&nbsp; qo'shish </Link>
    )
}


function Category(){
    
    const [item,setItem] = useState({ nameuz : "", nameru : ""})
    function UpdateCategory(id){
        Alert.fire({
            title : "O'zgartirish",
            html : 
                <div className="mx-auto form-in-alert">
                    <div className="form-group">
                        <label htmlFor="edituz">Sarlavha (uz) </label>
                        <input id="edituz" type="text" onChange={ e => setItem({...item,nameuz : e.target.value})} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="editru">Sarlavha (ru)</label>
                        <input id="editru" type="text" onChange={ e => setItem({...item, nameru : e.target.value})} className="form-control" />
                    </div>
                </div>,
            showCancelButton : true,
            cancelButtonText : "Bekor qilish",
            confirmButtonText : "O'zgartirish",
            showLoaderOnConfirm : true
        })
    }

    function deleteCategory(title,id){

        Swal.fire({
            title : "Diqqat !",
            html : `Siz rostdan ham <strong>${title}</strong> kategoriyasini o'chirishni istaysizmi ?`,
            icon : "warning",
            showCancelButton : true,
            cancelButtonText : "Bekor qilish",
            confirmButtonText : "Davom etish",
            dangerMode : true,
            showLoaderOnConfirm : true,
            preConfirm : () => {
                return categoryApi.removeCategory(id)
                    .then( res => {
                        categoryApi.getCategory()
                        .then( res => {
                            setCategories(res.data.categoryList);
                            setRequest(false);
                            Swal.fire("","Kategoriya muvoffaqiyatli o'chirildi","success")
                        })
                    }, err => console.log(err))
            }
        })
    }


    const [categories, setCategories] = useState([]);
    const [request, setRequest] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Waves.init();
        Waves.attach('.addCatbtn','waves-effect');
        categoryApi.getCategory()
            .then( res => {
                setCategories(res.data.categoryList);
                setRequest(false);
            })
    },[])

    
    return(
        <div className={cl(st.relative)}>
            <PageTitle title="Kategoriyalar" subTitle="Karvon kategoriyalari bo'limi" component={<AddCategory/>}/>
            {
                request ? <Loader/> : 
                categories.length>0 ?
                <div className={cl(st.category)}>
                    <ul className={cl(st.category_table)}>
                        <CategoryList onChange={ (item,id) => UpdateCategory(item,id)} onDelete={ (title,id) => deleteCategory(title,id) } data={categories} order={0}/>
                    </ul>
                </div> : 
                <div className={cl(st.category)}>
                    <div className={cl(st.nodata)}>
                        <img src={nocategory} alt="NoData"/>
                        <p> Hozircha kategoriyalar mavjud emas. Siz <kbd>Qo'shish</kbd> tugmasini bosib yangi kategoriya yaratishingiz mumkun .</p>
                    </div>
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
                        {item.children.length > 0 && order<2 ? <i className={cl("bx bx-plus")} data-toggle="collapse" data-target={`#children-${index}${order}`}></i> : null } 
                        <label > {item.name.uz} </label>
                    </div>
                    <div className="d-inline-block ml-auto">
                        <button className={st.edit} onClick={ () => onChange(item)}><i className="bx bx-pencil"></i></button>
                        <button className={st.delete} onClick={ () => onDelete(item.name.uz,item._id)}><i className="bx bx-trash"></i></button>
                    </div>
                </div>
                {
                    item.children.length>0 && order<2 ? 
                    <ul className="collapse" id={`children-${index}${order}`}>
                        <CategoryList onDelete={ onDelete } onChange={ onChange } data={item.children} order={order+1}/>
                    </ul> : null
                }
            </li>
            )
        })
    )
}
export default Category;