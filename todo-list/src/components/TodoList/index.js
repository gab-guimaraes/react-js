import React, {Component} from "react";

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tarefa: '',
      items: [ ]
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    let state = this.state;
    if (this._tarefaInput.value !== '') {
      let newItem = {
        text: this._tarefaInput.value,
        key: Date.now()
      };
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input type="text" 
          placeholder="nova tarefa" 
          name="tarefa" 
          value={this.state.tarefa}
          onChange={ (ev) => this.setState({tarefa: ev.target.value})}
          ref={(event) => this._tarefaInput = event }
      
          />
          <button>
            Adicionar
          </button>
        </form>
      </div>
    )
  }
}

export default TodoList;