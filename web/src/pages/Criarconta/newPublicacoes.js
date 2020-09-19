import React from 'react';
import ListItemsPub from './list-itemPublicacoes'


class NewPublicacoes extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        items:[],
        currentItem:{
          text:'',
          year: '',
          key:''
        }
      }
      this.addItem = this.addItem.bind(this);
      this.handleInputText = this.handleInputText.bind(this);
      this.handleInputDate = this.handleInputDate.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
    }
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if((newItem.text !=="") || (newItem.year !=="")){
        const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          year: '',
          key:''
            }
        })
      }
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
    setUpdate(text, year, key){
      const items = this.state.items;
      items.map(item => {      
        if(item.key === key){
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
          <form id="to-do-form" onSubmit={this.addItem}>
          <p className="title-area">Titulo</p>
            <input type="text" placeholder="Digite uma área de interesse" value= {this.state.currentItem.text} onChange={this.handleInputText} name="Publicacao-text" required ></input>
            <br/>
            <p className="title-area">Ano da Publicação</p><br/>
            <input type="number" placeholder="Digite o ano da publicação" value= {this.state.currentItem.year} onChange={this.handleInputDate} name="Publicacao-year" required ></input>
            <button type="submit">Adicionar publicação</button>
          </form>
          <div className="App">
            <p>{this.state.items.text}</p>
            <date>{this.state.items.year}</date>
            </div>
            <ListItemsPub items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
      </div>
    );
   }
  }
  
  
  export default NewPublicacoes;