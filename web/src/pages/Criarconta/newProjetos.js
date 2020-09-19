import React from 'react';
import ListaItemProj from './list-itemProjetos'

class NewProjetos extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        items:[],
        currentItem:{
          title: '',
          text:'',
          year: '',
          key:''
        }
      }
      this.addItem = this.addItem.bind(this);
      this.handleInputTitle = this.handleInputTitle.bind(this);
      this.handleInputText = this.handleInputText.bind(this);
      this.handleInputDate = this.handleInputDate.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
    }
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if((newItem.text !=="") || (newItem.year !=="") || (newItem.title !== "")){
        const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          title: '',
          text:'',
          year: '',
          key:''
            }
        })
      }
    }

    handleInputTitle(event){
        this.setState({
          currentItem:{
            title: event.target.value,
            key: Date.now()
          }
        })
      }

    handleInputText(event){
      this.setState({
        currentItem:{
          text: event.target.value,
          key: Date.now()
        }
      })
    }

    handleInputDate(event){
        this.setState({
          currentItem:{
            year: event.target.value,
            
          }
        })
      }


    deleteItem(key){
      const filteredItems= this.state.items.filter(item =>
        item.key !== key);
      this.setState({
        items: filteredItems
      })
  
    }
    setUpdate(title, text, year, key){
      const items = this.state.items;
      items.map(item => {      
        if(item.key === key){
          item.title = title
          item.text = text
          item.year = year
        }
      })
      this.setState({
        items: items
      })
    }

   render(){
    return (
      <div className="App">
          <form onSubmit={this.addItem}>
          <p >Titulo</p>
            <input type="text" placeholder="Digite o título" value= {this.state.currentItem.title} onChange={this.handleInputText} required ></input>

            <p className="title-area">Ano da Publicação</p><br/>
            <input type="number" placeholder="Digite o ano" value= {this.state.currentItem.year} onChange={this.handleInputDate} required ></input>

            <textarea maxLength={300} value= {this.state.currentItem.text} onChange={this.handleInputTitle}></textarea>
            <button type="submit"> + </button>
          </form>
          <div className="App">
            <p>{this.state.items.title}</p>
            <date>{this.state.items.year}</date>
            <small>{this.state.items.text}</small>
            </div>
            <ListaItemProj items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
      </div>
    );
   }
  }
  
  
  export default NewProjetos;