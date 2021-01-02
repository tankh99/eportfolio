import { Col } from 'antd';
import React from 'react';

interface P {
    children: any
}

export default function Column(props: P){
    return(
        <Col xs={24} md={12} lg={8}>
            {props.children}
        </Col>
    )
}