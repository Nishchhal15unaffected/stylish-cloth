import React from 'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';

const MenuItem=({imageUrl,title,size,link,match,history})=>{
    return(
    <div className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${link}`)}>
        <div  className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}>
          <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
    </div>
    )}
export default withRouter(MenuItem);