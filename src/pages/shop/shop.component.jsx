import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../component/CollectionPreview/CollectionPreview.component'
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collection:SHOP_DATA
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.collection.map(({id,...otherCollection})=>{
                        return <CollectionPreview key={id} {...otherCollection} />
                    })
                }
            </div>
        )
    }
}
export default ShopPage;