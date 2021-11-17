import { findByLabelText } from "@testing-library/react";

import {DeleteOutlined, CheckCircleTwoTone} from '@ant-design/icons';
import { List, Avatar } from 'antd';
import React from "react";

import './index.css'

const ListTask = ({todo, removeTask, toggleTask}) => {
    const data = [todo];
    console.log (data)
    
    return (
        <div className={todo.check ? "item-todo done" : "item-todo"} key={todo.id}>
            <List
                itemLayout="horizontal"
                dataSource={data}
                bordered
                renderItem={item => (
                    <List.Item 
    //   actions={() => {
    //       return ()
    //   }}
      >
          
                <List.Item.Meta
                title={<span>{item.task}</span>}
          
          
          //description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
            <div onClick={() => toggleTask(todo.id)} className="item-done">
                <CheckCircleTwoTone twoToneColor={todo.check ? "#52c41a" : "grey"} />
                </div>
            <div onClick={() => removeTask(todo.id)} className="item-delete">
                <DeleteOutlined />
                </div>
            </List.Item>
            )}
            />
            
            
        </div>
    )
}
export default ListTask;