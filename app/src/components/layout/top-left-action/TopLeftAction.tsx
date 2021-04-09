import { AppstoreOutlined } from '@ant-design/icons';
import { css } from 'aphrodite';
import React from 'react';
import { Link } from 'react-router-dom';
import "./TopLeftAction.scss";
interface P {
    // icon: string,
    to: string
}

export default function TopLeftAction(props: P){
    return (
        <div className={"top-left-action"}>
            <Link to={props.to} className="icon-link">
                <AppstoreOutlined className="top-left-action-icon"/>
            </Link>
            
        </div>
    )
}

