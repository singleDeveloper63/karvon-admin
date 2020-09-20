import React  from 'react';
import { PageTitle , TreeSelect } from '../../../components';
import st from './addCategory.module.scss';
import cl from 'classnames';
import { Link } from 'react-router-dom';


function AddCategory(){
    const data = [
        { label : "Item 1" , value : "item1" , children : [
            { label : "item 1.1" , value : "item1.1" },
            { label : "item 1.2", value : "item1.2" },
            { label : "item 1.3", value : "item1.3" , children : [
                { label : "item 1.3.1" , value : "item1.3.1" },
                { label : "item 1.3.2" , value : "item1.3.2"},
                { label : "item 1.3.1" , value : "item1.3.1" },
                { label : "item 1.3.2" , value : "item1.3.2"},
                { label : "item 1.3.1" , value : "item1.3.1" },
                { label : "item 1.3.asdfasdfasdfasdfasdf2" , value : "item1.3.2"},
                { label : "item 1.asdfgadfg3.1" , value : "item1.3.1" },
                { label : "item 1.3.2" , value : "item1.3.2"},
            ]}
        ]}
    ]

    return(
        <div>
            <PageTitle title="Kategoriya qo'shish" subTitle="Asosiy yoki sub kategoriya qoshish"
            component={ 
                <Link to='/categories' className={cl(st.back)}> <i className="bx bx-arrow-back"></i> Orqaga</Link> }/>
            <div className={cl(st.addCategory)}>
                <form onSubmit={ e => e.preventDefault()}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Sarlavha (ru)</label>
                                <input placeholder="Игрушки..." type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="">Sarlavha (uz)</label>
                                <input placeholder="O'yinchoqlar..." type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="category">Asosiy kategoriyani tanlash</label>
                            <TreeSelect id="category" placeholder="Kategoriyani tanlash" onChange={ val => console.log(val) } data={data} placeHolder="Kategoriyani tanlang"/>                            
                            <button className={cl(st.addCategory_submit,"d-flex align-items-center justify-content-center")}><i className="bx bx-plus mr-1"></i> Qo'shish </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCategory;