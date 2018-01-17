import React from 'react';
import { get_img_dent } from '../../helpers/num_dent';
import './Dent.css';

const Dent = (props) => {
    let imgPath = get_img_dent(props.num,props.face)
    console.log(imgPath);
    return (
            <img src={imgPath} alt={props.num} onClick={props.clicked} className={props.face}/>
    )
}

export default Dent;

