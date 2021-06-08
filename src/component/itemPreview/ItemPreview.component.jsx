import React from 'react';
import './ItemPreview.style.scss'
const ItemPreview = ({id, name, price, imageUrl})=>{
    return(
        <div>
            {
             <div className='collection-item'>
                 <div className='image'
                    style={{
                        backgroundImage:`url(${imageUrl})`
                    }}
                 />
                 <div className='collection-footer'>
                     <span className='name'>{name}</span>
                     <span className='price'>{price}</span>
                 </div>
             </div>   
            }
        </div>
    );
}
export default ItemPreview;