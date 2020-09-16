import React from 'react';
import FlipMove from 'react-flip-move';

export default function ListItemsPublicacoes(props){
    const items = props.items;
    const ListPublicacoes = items.map(item => {
       return <div className="listaItens" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text} onChange={(e)=>{
                        props.setUpdate(e.target.value, item.key, item.text )
                        }}/>
                        
                    <input type="number" id={item.key} value={item.year} onChange={(e)=>{
                        props.setUpdate(e.target.value, item.key, item.year)
                        }}/>
                    <span>
                
                    <button onClick={() => {
                        props.deleteItem(item.key)
                    }}>Excluir</button>
                    </span>
                </p>
     
    </div>})
    return <div>
        <FlipMove duration={100}>
            {ListPublicacoes}
        </FlipMove>
    
    </div>;
  }

