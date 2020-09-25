import React from 'react';
import ListItems from './list-item'


class NewInteresse extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        items:[],
        currentItem:{
          text:'',
          key:''
        }
      }
      this.addItem = this.addItem.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
    }
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if(newItem.text !==""){
        const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          key:''
        }
      })
      }
    }
    handleInput(e){
      this.setState({
        currentItem:{
          text: e.target.value,
          key: Date.now()
        }
      })
    }
    deleteItem(key){
      const filteredItems= this.state.items.filter(item =>
        item.key!==key);
      this.setState({
        items: filteredItems
      })
  
    }
    setUpdate(text,key){
      console.log("items:"+this.state.items);
      const items = this.state.items;
      items.map(item=>{      
        if(item.key===key){
          item.text= text;
        }
      })
      this.setState({
        items: items
      })
      
     
    }
   render(){
    return (
      <div className="App">
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Digite uma área de interesse" value= {this.state.currentItem.text} onChange={this.handleInput} name="ListItems" required ></input>
            <button type="submit">Adicionar</button>
          </form>
          <p>{this.state.items.text}</p>
          
            <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
      </div>
    );
   }
  }
  
  
  export default NewInteresse;