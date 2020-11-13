import React, { useState } from 'react';
import cl from 'classnames';
import st from './fileinput.module.scss';

function FileInput({onChange , id}){

    const [filename,setFilename] = useState("")

    return(
        <div className={cl(st.fileInput)}>
            <label htmlFor="fileinput"> <span> {filename} </span></label>
            <input required type="file" onChange={ e => {
                setFilename(e.target.files[0].name)
                onChange(e.target.files[0])
            }} id="fileinput" accept="image/*"/>
        </div>
    )
}

export default FileInput;