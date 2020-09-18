import React from 'react';
import st from './dashboard.module.scss';
import cl from 'classnames';
import Waves from 'node-waves';
import { PageTitle } from '../../components';

function SalesReport({data}){
    return(
        <div className={cl(st.sales_report)}>
            <div className="row">
                {
                    data.map( (item,index) => {
                        return(
                            <div className={cl(st.sales_report_item,"col-12 col-sm-6 col-md-3")} key={index}>
                                <div className={cl(st.sales_report_item_content)}>
                                    <div className="row h-100">
                                        <div className="col-9 d-flex justify-content-center flex-wrap flex-column">
                                            <h5> {item.title} </h5>
                                            <h4> {item.amount} </h4>
                                        </div>
                                        <div className="col-3 p-0 d-flex align-items-end">
                                            <img src={item.img} alt={item.title}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



function Dashboard(){

    const data = [
        { title : "Umumiy maxsulotlar soni :" , amount : "3700" , img : require('../../assets/images/product.svg') },
        { title : "Umumiy buyurtmalar soni :" , amount : "1034" , img : require('../../assets/images/order.svg') },
        { title : "Yetkazib berilgan :" , amount : "902", img : require('../../assets/images/shipped.svg') },
        { title : "Eltib berish jarayonida :", amount : "132", img : require('../../assets/images/waiting.svg')  }
    ]

    return(
        <div className={cl(st.dashboard)}>
            <PageTitle title="Statistika" subTitle="Karvon statistikalari bo'limi"/>
            <SalesReport data={data}/>
        </div>
    )
}


export default Dashboard;