import React, { useEffect , useState } from 'react';
import { PageTitle, Loader } from '../../components';
import './banner.scss';
import { Link } from 'react-router-dom';
import nodata from  '../../assets/images/nodata.svg';
import { Banner as bannerApi } from '../../api/banner';
import Axios from 'axios';


function Banner(props){
    const [banners , setBanners] = useState([]);
    const [load , setLoad] = useState(true);

    useEffect(()=>{
        bannerApi.getAll()
            .then( res =>{
                setBanners(res.data.ads)
                setLoad(false)
                console.log(res.data.ads[0])
            }, err => {
                setLoad(false);
            })
    },[])

    if(load){
        return(
            <Loader/>
        )
    }else{
        return(
            <div className="banner">
                <PageTitle title="Bannerlar" subTitle="Saytning yuqori qismidagi reklama bannerlari" component={<Link to='/banner/add' className="addBtn d-flex align-items-center addCatbtn"><i className="bx bx-plus"></i>&nbsp; qo'shish </Link>}/>
                {
                    banners.length>0 ? 
                    <div className="page">
                        <BannerList onUpdate={ values => setBanners(values)} data={banners}/>
                    </div> : <NoData/>
                }
            </div>
        )
    }
}

function BannerList({data = [] , onUpdate}){
    return(
        <div className="bannerList">
            <table>
                <thead>
                    <tr>
                        <th className="index">№</th>
                        <th>Rasmi</th>
                        <th>Nomi</th>
                        <th>Boshlanish vaqti</th>
                        <th>Tugash vaqti</th>
                        <th>Amallar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>{
                            return(
                                <BannerItem onGet={ values => onUpdate(values)} index={index+1} data={item} key={index}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

function BannerItem({data,index , onGet}){

    const [rem,setRem] = useState(false);

    return(
        <tr>
            <td className="index">
                {index}
            </td>
            <td>
                <img src={`http://umdsoft.uz${data.image}`} alt={data.name}/>
            </td>
            <td className="title">
                {data.name}
            </td>
            <td>
                { data.startDate.slice(0,10) }
            </td>
            <td>
                { data.endDate.slice(0,10) }
            </td>
            <td>
                <button onClick={()=>{
                    setRem(true)
                    bannerApi.delete(data._id)
                        .then(()=>{
                            bannerApi.getAll()
                                .then( res =>{
                                    onGet(res.data.ads)
                                    setRem(false)
                                }, err => {
                                    setRem(false);
                                })
                        })
                }}><i className={rem ?  "bx bx-message-dots":"bx bx-trash"}></i></button>
                <button><i className="bx bx-pen"></i></button>
            </td>
        </tr>
    )
}

function NoData(){
    return(
        <div className="page">
            <div className="nodata">
                <img src={nodata} alt="No data"/>
                <p>Hozircha hech qanday banner yaratilmagan . Siz <kbd>Qo'shish</kbd> tugmasini bosib yangi bannerlar yaratishingiz mumkun</p>
            </div>
        </div>
    )
}

export default Banner;