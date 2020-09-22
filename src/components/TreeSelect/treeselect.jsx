import React, { useState , useEffect } from 'react';
import cl from 'classnames';
import st from './treeselect.module.scss';
import Waves from 'node-waves';

function TreeSelect({data , onChange ,placeholder , id }){

    const [open , setOpen] = useState(false);
    const [selected , setSelected] = useState(placeholder);
    return(
        <div className={cl(st.treeselect)} id={id} onFocus={() => setOpen(true)}>
            <div onClick={() => setOpen(!open)} className={cl(st.treeselect_placeholder,open && st.focused)}> {selected} <i className={`bx bx-chevron-${open ? "up" : "down"}`}></i></div>
            <div className={st.relative}>
                {
                    open && 
                        <ul className={cl(st.treeselect_menu )}>
                            <MakeMenu data={data} onSelect={ (text,val) => {
                                setSelected(text);
                                onChange(val);
                            }}/>
                        </ul>
                }
            </div>
        </div>
    )
}


function MakeMenu({data , onSelect }){
    
    useEffect(() => {
        Waves.init();
        Waves.attach('.catLabel',['waves-effect','waves-block'])
    },[])
    return(
        data.map((item,index) => {
            return (
            <li key={index}>
                <div onClick={ () => {
                    onSelect(item.name.uz, item._id);
                }} className={ cl(st.treeselect_menu_label,'catLabel') }>
                    { item.children && item.children.length > 0 && <i className="bx bx-plus" data-toggle="collapse" data-target={`#child-${index}`}></i> } 
                    <label > {item.name.uz} </label>
                </div>
                {
                    item.children.length>0 && 
                    <ul className="collapse" id={`child-${index}`}>
                        <MakeMenu onSelect={onSelect} data={item.children}/>
                    </ul>
                }
            </li>
            )
        })
    )
}



export default TreeSelect;