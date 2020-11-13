import React , {useEffect, useState} from 'react';
import { PageTitle} from '../../components';
import { blogApi } from '../../api/blog';
import st from './blog.module.scss';
import cl from 'classnames';
import { Link } from 'react-router-dom';
import ReactSkeletonLoader from 'react-skeleton-loader';
import Swal from 'sweetalert2';
import nodata from '../../assets/images/nodata.svg';
import ReactHtmlParser from 'react-html-parser';

function Blog(){

    const [request,setRequest] = useState(true);
    const [data,setData] = useState([]);

    useEffect(() => {
        blogApi.getNews()
            .then( res => {
                console.log(res.data)
                setData(res.data)
                setRequest(false)
            })
    },[])

    function getData(){
        setRequest(true);
        blogApi.getNews()
        .then( res => {
            console.log(res.data)
            setData(res.data)
            setRequest(false)
        })
    }

    return(
        <React.Fragment>
            <PageTitle title="Blog" subTitle="Karvon blog bo'limi" component={ <Link to='/blog/add' className={cl(st.addBtn, "d-flex align-items-center addCatbtn")}><i className="bx bx-plus"></i>&nbsp; qo'shish </Link> }/>
            <div className={cl(st.page)}>
                <div className={"d-flex justify-content-between align-items-center flex-wrap border-bottom pb-2"}>
                    <h5>Yangiliklar ro'yxati</h5>
                    <div className={cl(st.rew,"input-group")}>
                        <input type="search" placeholder="Izlash" className="form-control"/>
                        <button className="input-group-addon" className="btn btn-primary"> <i className="bx bx-search"></i> </button>
                    </div>
                </div>
                {
                    request ? 
                    <React.Fragment>
                        <div className="mt-3">
                            <ReactSkeletonLoader count="1" borderRadius="0" height="30px" width="30%" widthtRandomness="0"/>
                            <ReactSkeletonLoader count="5" borderRadius="0" width="100%" widthRandomness="0"/>
                        </div>
                        <div className="mt-3">
                            <ReactSkeletonLoader count="1" borderRadius="0" height="30px" width="30%" widthRandomness="0"/>
                            <ReactSkeletonLoader count="5" borderRadius="0" width="100%" widthRandomness={false}/>
                        </div>
                    </React.Fragment>
                    : data.length>0 ? 
                    <div className={st.page_content}>
                        <table className={cl(st.table)}>
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Post sarlavhasi</th>
                                    <th> Kategoriyasi </th>
                                    <th>Yaratilgan sana</th>
                                    <th> Teglar </th>
                                    <th> Amallar </th>
                                </tr>
                            </thead>
                            <tbody>
                                <MakeTable onDelete={() => getData()} data={data}/>
                            </tbody>
                        </table>
                    </div>
                    : 
                    <div className={cl(st.nodata)}>
                        <img src={nodata} alt=""/>
                        <p>Hozircha hech qanday blog yaratilmagan . Siz  <kbd>Qo'shish</kbd> tugmasini bosib yangi bloglarni yaratishingiz mumkun</p>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

function MakeTable({data,onDelete}){

    function deleteBlog(title,id){
        Swal.fire({
            title : "Diqqat",
            html : `Siz rostdan ham <strong>${title}</strong> blogini o'chirishni istaysizmi ?`,
            showLoaderOnConfirm : true,
            showCancelButton : true,
            cancelButtonText : "Bekor qilish",
            confirmButtonText : "Davom etish",
            preConfirm : () => {
                return blogApi.deleteNews(id)
                    .then( res => {
                        Swal.fire("","Blog muvoffaqiyatli o'chirildi","success")
                        onDelete()
                    })
            }
        })
    }

    const [preview, setPreview] = useState({});

    return(
        <React.Fragment>
            {
                data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td> {index+1} </td>
                            <td className={cl(st.rw)}> {item.title.uz} </td>
                            <td> {item.category === "exp" ?  "Ekspertlar blogi" : "Qaynoq blog"} </td>
                            <td> {`${item.createdAt.slice(0,10)} / ${item.createdAt.slice(11,19)}`} </td>
                            <td className={cl(st.taglist)}>{ item.tags.map((item,index) => { return <span key={index} className={cl(st.tag)}> {item} </span> } )}</td>
                            <td className={st.actions}> 
                                <button className={cl(st.show)} onClick={ () => setPreview(item)} data-toggle="modal" data-target="#newsPreview"> <i className="bx bx-show-alt"></i> </button>
                                <button className={cl(st.edit)}> <i className="bx bx-pencil"></i> </button>
                                <button className={cl(st.delete)} onClick={() => deleteBlog(item.title.uz,item._id)}> <i className="bx bx-trash"></i> </button>
                            </td>
                        </tr>
                    )
                })
            }
            <div className={cl("modal fade")} id="newsPreview">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className={cl(st.preview,"modal-content")}>
                        <div className="modal-body p-4">
                            <h4 className={st.preview_title}> { preview.title && preview.title.uz } </h4>
                            <img src={`http://umdsoft.uz${preview.image && preview.image }`}/>
                            <div className={cl(st.preview_description)}>
                                { preview.description && ReactHtmlParser(preview.description.uz) }
                            </div>
                            {
                                preview.tags && 
                                <div className={st.preview_tags}>
                                    <h5>Teglar :</h5>
                                    {
                                        preview.tags.map((item,index) => {
                                            return <span key={index}> {item} </span>
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Blog;