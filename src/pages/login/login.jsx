import React, { useEffect, useState } from 'react';
import st from './login.module.scss';
import cl from 'classnames';
import Waves from 'node-waves';
import { authApi } from '../../api/auth';

function Login(){
    const [data,setData] = useState({ phone : "", password : "" });
    const [proc,setProc] = useState({ load : false , error : false })
    useEffect(()=>{
       Waves.init();
       Waves.attach("button",'waves-effect')
    },[])

    const login = e => {
        e.preventDefault();
        setProc({ error : false , load : true })
        authApi.login(data).then( res => {
            localStorage.setItem('token',res.data.token);
            window.location.reload();
        }, err => {
            setProc({ load : false , error : true })
        })
    }

    return(
        <div className={cl(st.login)}>
            <h2 className={cl(st.login_title)}> KARVON </h2>
            <div className={cl(st.login_card,"card")}>
                <p className={cl(st.login_card_info)}> Boshqaruv paneliga kirish </p>
                
                <form className={cl(st.form)} onSubmit={ login }>
                    <div className={cl(st.form_group,"form-group")}>
                        <label htmlFor="phone">Telefon raqami</label>
                        <input onChange={ e => setData({...data, phone : e.target.value})} autoComplete="off" type="tel"
                        className={cl(st.form_input)} id="phone" placeholder="+998991234567"/>
                    </div>
                    <div className={cl(st.form_group,"form-group")}>
                        <label htmlFor="password">Parol</label>
                        <input onChange={ e => setData({...data , password : e.target.value})} autoComplete="off"  type="password" className={cl(st.form_input)} id="password"/>
                    </div>
                    {
                        proc.error && 
                        <div className="alert alert-danger" style={{fontSize : "13px"}}>
                            Telefon raqami yoki parol noto'g'ri kiritildi
                        </div>
                    }
                    <button type="submit" className={cl(st.submit)} disabled={proc.load}>Kirish {
                        proc.load && <i className="bx bx-loader-alt bx-spin"></i>
                    } </button>
                </form>

            </div>
        </div>
    )
}

export default Login;