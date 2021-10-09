import React from "react";
import CustomInput from "./components/CustomInput/index";
import List from "./components/List/index";
import Task from "./components/Task/index";

import './App.css';


class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {id: 0, title: 'task1', done: false},
                {id: 1, title: 'task2', done: true},
                {id: 2, title: 'task3', done: false}
            ],
            newTask: ''
        }
        this.addTask = this.addTask.bind(this)
        this.changeInput = this.changeInput.bind(this)
    }
    addTask() { 
        const {tasks, newTask} = this.state;
        newTask && this.setState({
            tasks: [...this.state.tasks, {id: tasks.length ,
                title: newTask,
                done: false}],
            newTask: ''
            }) 
    }
    changeInput(e){
        this.setState({
            newTask: e.target.value 
        })
        console.log(this.state.newTask);  
    }
    render() {
        const {tasks} = this.state;
        return (
            <div>
                <div>
                    <h1>Active tasks: {tasks.length}</h1>
                </div>
                <CustomInput 
                    change={(e) => this.changeInput(e)} 
                />
                <Task 
                    addChange={this.addTask}
                />
                {tasks.map(task => <List task={task}/>)
                }
            </div>
        )
    }
}

export default Main;

// CustomInput.tsx       // Форма для добавления новой задачи
//     Task.tsx        // Задача
//     List.tsx        // Список задач