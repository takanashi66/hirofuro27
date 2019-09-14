import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: [
                {
                    date: '2019.11.15',
                    title: 'JavaScript覚える'
                },
                {
                    date: '2019.11.20',
                    title: 'React覚える'
                },
            ],
        }
        
        this.addTodo = this.addTodo.bind(this);
    }
    
    addTodo(e){
        e.preventDefault();
        
        const date = document.querySelector('.form input[name=date]').value
        const task = document.querySelector('.form input[name=task]').value
        
        if(date != "" && task != ""){
            this.state.todo.push({
                date: date,
                title: task
            })
            
            this.setState({
                todo : this.state.todo
            })
            
            document.querySelector('.form').reset()
        }
    }
    
    render(){
        
        return(
            <div className="todo">
                
                <div className="todo_list">
                    <div className="list">
                    
                        {this.state.todo.map((todo, i) => {
                            return(
                                <div className="list_item" key={i}>
                                    <time>{todo.date}</time>
                                    <p>{todo.title}</p>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
                
                <div className="regist">
                    <form action="#" className="form">
                        <label>日付</label>
                        <input type="text" name="date" />
                        <label>タスク</label>
                        <input type="text" name="task" />
                        <input type="submit" value="登録" onClick={this.addTodo} />
                    </form>
                </div>
                
            </div>
        )
    }
    
}


//レンダリング
ReactDOM.render(
    <Todo/>,
    document.getElementById('app')
)