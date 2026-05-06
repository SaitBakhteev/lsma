import { useState } from 'react'

import bs from './buttons.module.css';
import getURLData from '../services/ops.js'

function Btn() {
  return (
      <button className={bs.blueButton}>Hello world!</button>
  );
}

function Btn_2() {
    const [ picData, setPicData ] = useState(null);

    const clickHandle = async () => {
        const urlData = await getURLData('https://api.users.skroy.ru/users');
        setPicData(<p>{ JSON.stringify(urlData)}</p>);
    }
    var button = <button className={bs.greenBt} onClick={clickHandle}>green</button>;    
    var body = <div>{button} { picData }</div>; 
    return body;
}

export { Btn, Btn_2 };
