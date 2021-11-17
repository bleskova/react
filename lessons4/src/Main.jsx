import React, { useEffect } from "react";
import {useState}  from "react";
import CustomInput from "./components/CustomInput/index";
import ListTask from "./components/List/index";
import UsernameInput from "./components/UsernameInput/index";

import './App.css';

const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState(Object.keys(localStorage));
    const [currentUser, setCurrentUser] = useState();

    //dellete task
    const removeTask = (delTask) => {
        setTasks([...tasks.filter((el) => el.id !== delTask)])
    }
    //done task
    const toggleTask = (id) => {
        setTasks([
            ...tasks.map((el) => 
                el.id === id ? {...el, check: !el.check} : {...el})])
    }

    useEffect(() => {
        if (user.includes(currentUser)) {
            setTasks(JSON.parse(localStorage.getItem(currentUser)))
        } else {
            setUser([...user, currentUser])
            localStorage.setItem(currentUser, "[]")
        }
    }, [user, currentUser]);
       
    return (
        <div className="main">
            <h1>ToDoList:  {currentUser}</h1>
            <UsernameInput               
                inputnameUser = {setCurrentUser}
            />
            <h3>Всего задач: {tasks.length}</h3>
            <CustomInput     
                tasks={tasks}
                setTasks = {setTasks}
                currentUser = {currentUser}
                />   
                {tasks.map((el) => {
                return (
                    <ListTask 
                        todo={el}
                        key={el.id}
                        removeTask={removeTask}
                        toggleTask = {toggleTask}
                        
                    />
                    
                )
            })}
        </div>
    )
}



export default Main;
