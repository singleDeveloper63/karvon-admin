import React, { useState, useEffect } from 'react';
import './bannerAdd.scss';
import {FileInput, PageTitle } from '../../../components';
import { Link } from 'react-router-dom';
import { Banner } from '../../../api/banner';

function BannerAdd(props){

    const [form,setForm] = useState({});
    const [load,setLoad] = useState(false);
    const [status ,setStatus] = useState("")

    const setBanner = e =>{
        setLoad(true)
        e.preventDefault();
        let data = new FormData();
        Object.keys(form)
            .forEach( key =>{
                data.append(key,form[key])
            })
        Banner.add(data)
            .then( res =>{
                setStatus("success");
                setLoad(false)
            })
            .catch( err =>{
                setLoad(false);
                setStatus("error")
            })
    }

    return(
        <div className="bannerAdd">
            <PageTitle title="Banner yaratish" subTitle="Saytda yangi banner yaratsih" component={<Link to='/banner' className="back"> <i className="bx bx-arrow-back"></i> Orqaga</Link>}/>
            <div className="page">
                <form onSubmit={ setBanner } className="banner_form">
                    <div className="form-group">
                        <label htmlFor="name">Reklama nomi</label>
                        <input onChange={ e => setForm({...form , name : e.target.value})} required type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Rasmi</label>
                        <FileInput id="file" onChange={ val => setForm({...form , image : val})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">Reklama havolasi</label>
                        <input onChange={ e => setForm({...form , url : e.target.value})} required type="url" className="form-control" id="url"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="enddate">Tugash sanasi</label>
                        <input required type="date" className="form-control" id="enddate" onChange={ e => setForm({...form , endDate : e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select required  onChange={ e => {
                            if(e.target.value === "1"){
                                setForm({...form , status : "true"})
                            }else{
                                setForm({...form , status : "false"})
                            }
                        }} id="status" className="form-control">
                            <option value="0" disabled selected>Tanlanmagan</option>
                            <option value="1" >Ko'rsatish</option>
                            <option value="-1">Yashirish</option>
                        </select>
                    </div>
                    {
                        status === "success" ?
                        <div className="alert alert-success alert-dismissible fade show">
                            Banner muvoffaqiyatli yaratildi
                            <button onClick={()=>setStatus("")} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> : status === "error" ?
                        <div className="alert alert-danger alert-dismissible fade show">
                            Bannerni yaratishda xatolik
                            <button onClick={()=>setStatus("")} type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> : ""
                    }
                    <button className="submitter"> {load ? "Kutib turing..." : "Qo'shish"} </button>
                </form>
            </div>
        </div>
    )
}

export default BannerAdd;