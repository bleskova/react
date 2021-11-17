import React from "react";
import {useState}  from "react";
import { Input, Space } from 'antd';
import './index.css'

const UsernameInput = ({inputnameUser}) => {
    const [username, setUsername] = useState('');
    const { Search } = Input;
    return (
        <div className="main-form">
            <span>Введите имя пользователя:</span>
            <div className="input-user">
            <Space direction="vertical">
                <Search
                    placeholder="name user"
                    allowClear
                    enterButton="готово"
                    //size="large"
                    onChange = {(e) => setUsername(e.target.value)}
                    onSearch={() => inputnameUser(username)}
                    />
                    </Space>
            
        </div>
        </div>
    )
}
export default UsernameInput;