import React, {useEffect} from "react";
import {useState}  from "react";
import { Input, Space } from 'antd';

import './index.css'

const CustomInput = ({tasks, setTasks, currentUser}) => {
    const [userInput, setUserInput] = useState('');
    const { Search } = Input;
    //input task
    const inputTask = ({userInput}) => {
        if (!userInput == '') {
            saveTask({userInput});
            setUserInput('')
        }
        
    }
    //save new  task
    const saveTask = (userInput) => {
        if (userInput) {
            const newTask = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput.userInput,
                check: false
            }
            setTasks([...tasks, newTask])
        }
    }
    useEffect(() => {
        localStorage.setItem(currentUser, JSON.stringify(tasks))
    }, [tasks])

    return (
        <div className="input-block">
                <Space direction="vertical">
                    <Search
                        placeholder="новая задача"
                        allowClear
                        enterButton="Добавить"
                        size="large"
                        onChange = {(e) => setUserInput(e.target.value)}
                        onSearch={() => inputTask({userInput})}
                        />
                    </Space>
            
        </div>
    )
}
export default CustomInput;