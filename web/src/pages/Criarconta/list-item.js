import React from 'react';
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="listaItens" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <button onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash">Excluir</button>
        </span>
     </p>
     
    </div>})
    return <div>
        <FlipMove duration={100}>
            {listItems}
        </FlipMove>
    
    </div>;
  }

  export default ListItems;