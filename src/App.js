import React, { Component } from 'react';
import cs from 'classnames';

let todos = [
        {id:1,name:'吃饭',completed:true},
        {id:2,name:'睡觉',completed:true},
        {id:3,name:'打豆豆',completed:false},
        {id:4,name:'学习',completed:true},
        {id:5,name:'喝水',completed:false}
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:todos,
      leftNum:todos.filter(function(item){return item.completed === false}).length
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.showAll = this.showAll.bind(this);
    this.showActive = this.showActive.bind(this);
    this.showCompleted = this.showCompleted.bind(this);
  }

  handleToggle(event) {
      let target = event.target;
      let index = -1;
      for(let i=0;i<todos.length;i++){
        if(Number(target.id) === todos[i].id){
          index = i;
          break;
        }
      }
      todos[index].completed = !todos[index].completed; 
      this.setState({
        todos:todos,
        leftNum:this.state.todos.filter(function(item){return item.completed === false}).length
      })
  }

  handleRemove(event){
    let target = event.target;
    let index = -1;
    for(let i=0;i<todos.length;i++){
        if(Number(target.id) === todos[i].id){
          index = i;
          break;
        }
      }
    todos.splice(index,1);
    this.setState({
        todos:todos,
        leftNum:this.state.todos.filter(function(item){return item.completed === false}).length
      })
  }

  toggleAll(event){
    let target = event.target;
    todos = todos.map(function(item){item.completed = target.checked;return item;});
    this.setState({
        todos:todos,
        leftNum:this.state.todos.filter(function(item){return item.completed === false}).length
      })
  }

  addNewItem(event){
    let target = event.target;
    if(event.keyCode !== 13 || target.value.trim()==='')return;
    todos.push({
      id:todos[todos.length - 1].id + 1,
      name:target.value,
      completed:false
    })
    this.setState({
        todos:todos,
        leftNum:this.state.todos.filter(function(item){return item.completed === false}).length
      })
    target.value = '';
  }

  clearCompleted(){
    todos = todos.filter(function(item){return item.completed === false});
    this.setState({
        todos:todos,
        leftNum:this.state.todos.filter(function(item){return item.completed === false}).length
      })
  }

  showAll() {

  }

  showActive() {

  }

  showCompleted() {

  }

  render() {
    let that = this;
    return (
      <section className="todoapp">
		<header className="header">
			<h1>todos</h1>
			<input  className="new-todo" placeholder="What needs to be done?" autoFocus  onKeyUp={that.addNewItem} />
		</header>
    <section className="main">
    <ul className="todo-list">
          {
               this.state.todos.map(function(item,index){
                    return <li key={item.id} className={cs({completed:item.completed})}> 
                      <div className="view">
                        <input  className="toggle" type="checkbox" checked={item.completed} onChange={that.handleToggle} id={item.id} />
                        <label>{item.name}</label>
                        <button  className="destroy" onClick={that.handleRemove} id={item.id}></button>
                      </div>
                      <form>
                        <input className="edit"  />
                      </form>
                    </li>
                  })
          }
      </ul> 
			<input  className="toggle-all" type="checkbox" onChange={that.toggleAll} />
			<label htmlFor="toggle-all">Mark all as complete</label>
		</section>
		<footer className="footer">
			<span className="todo-count"><strong>{this.state.leftNum}</strong> item left</span>
			<ul className="filters">
				<li>
					<a className="selected" href="javascript:;" onClick={this.showAll}>All</a>
				</li>
				<li>
					<a href="javascript:;" onClick={this.showActive}>Active</a>
				</li>
				<li>
					<a href="javascript:;"  onClick={this.showCompleted}>Completed</a>
				</li>
			</ul>
			<button  className="clear-completed" onClick={this.clearCompleted}>Clear completed</button>
		</footer>
	</section>
      );
  }
}

export default App;
