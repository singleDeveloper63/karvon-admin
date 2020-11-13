import React , { useState , useEffect} from 'react';
import st from './addBlog.module.scss';
import Swal from 'sweetalert2';
import cl from 'classnames';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { PageTitle , FileInput , TreeSelect} from '../../../components';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css';
import Waves from 'node-waves';
import { blogApi } from '../../../api/blog';
import { Link } from 'react-router-dom';

 function AddBlog(){

    const [request,setRequest] = useState(false)
    const [data,setData] = useState({
        titleuz : "",
        titleru : "",
        descriptionuz : "",
        descriptionru : "",
        category : "",
        file : {},
        tags : []
    })

    function sendData(e){
        e.preventDefault();
        console.log(data.tags)
        const {titleuz , titleru , descriptionuz ,descriptionru , category ,file ,tags } = data;
        if(descriptionru === "" || descriptionuz === "" || category === "" , file === {} || tags.length === 0){
            Swal.fire("Xatolik","Barcha maydonlar to'ldirilishi shart","error");
        }else{
            setRequest(true)
            console.log(data);
            let form = new FormData();
            Object.keys(data).forEach( (item) => {
                if(item === "tags"){
                    data[item].forEach( (tag) => {
                        form.append(item,tag)
                    })
                }else{
                    form.append(item,data[item])
                }
            })
            blogApi.addNews(form)
                .then( res => {
                    console.log(res);
                    setRequest(false);
                    Swal.fire("","Blog muvoffaqiyatli yaratildi","success");
                }, err => console.log(err))
        }
    }

    useEffect(() => {
        Waves.init();
        Waves.attach('button',['waves-effect','waves-light'])
        blogApi.getNews()
            .then( res => console.log(res));
    },[])

    return(
        <React.Fragment>
            <PageTitle title="Blog yaratish" subTitle="Saytda yangi blog yaratish" component={<Link to='/blog' className={cl(st.back)}> <i className="bx bx-arrow-back"></i> Orqaga</Link>}/>
            <div className={cl(st.addPage)}>
                <form encType="multipart/form-data" onSubmit={ sendData}>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="form-group my-2">
                                <label htmlFor="titleuz">Sarlavha (uz)</label>
                                <input required onChange={ e => setData({...data, titleuz : e.target.value})} type="text" id="titleuz" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="form-group my-2">
                                <label htmlFor="titleru">Sarlavha (ru) </label>
                                <input required onChange={ e => setData({...data, titleru : e.target.value})} type="text" id="titleru" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="form-group my-2">
                                <label htmlFor="descuz"> Tavsif (uz) </label>
                                <ReactQuill onChange={ val => setData({...data , descriptionuz : val})} id="descuz"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="form-group my-2">
                                <label htmlFor="descru"> Tavsif (ru) </label>
                                <ReactQuill onChange={ val => setData({...data , descriptionru : val})} id="descru"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="form-group my-2">
                                <label htmlFor="fileinput">Rasmni tanlang</label>
                                <FileInput onChange={ file => setData({...data , file : file}) }/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="form-group my-2">
                                <label htmlFor="category">Kategoriyani tanlang</label>
                                <TreeSelect placeholder="Tanlanmagan" data={[{ name : {uz : "Ekspertlar blogi"}, _id : "exp" },{ name : {uz : "Qaynoq blog"}, _id : "gor"  }]}
                                onChange={ (a) => {
                                    setData({...data , category : a})
                                }} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group my-2">
                                <label htmlFor="tags">Teglar</label>
                                <TagsInput focusedClassName={cl(st.tagFocused)} 
                                inputProps={{placeholder : "Qo'shish"}} className={cl(st.tags)} value={data.tags}
                                onChange={ tags => {
                                    setData({...data,tags : tags}) 
                                }}/>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <button disabled={request} className={cl(st.btn_submit)}> <i className="bx bx-plus"></i> Qo'shish {request && <i className="bx bx-spin bx-loader-alt" ></i> }</button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
 }

 export default AddBlog;