import React from 'react';

const ListItems=(props)=>{
    const CreatedAt=new Date().toLocaleString();
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
    
    
         <input  type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}
             >        
             </input>
        <div>
        <div className="date">Create date:{CreatedAt}</div>
        <button className="delbtn" onClick={() => {
            props.deleteItem(item.key)
        }}>delete</button>
    </div>
    </div>})
    return <div>   
        {listItems}
    </div>;
  }

  export default ListItems;