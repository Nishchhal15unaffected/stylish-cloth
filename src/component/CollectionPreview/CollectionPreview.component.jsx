import React from 'react';
import ItemPreview from '../itemPreview/ItemPreview.component';
import './CollectionPreview.style.scss';
const CollectionPreview=({title, items})=>{
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className="preview">
                {
                    items.filter((item,idx)=>idx<4)
                        .map(({id,...otherItems})=>{
                        return <ItemPreview key={id} {...otherItems} />
                    })
                }
            </div>
        </div>
    )
}
export default CollectionPreview;
