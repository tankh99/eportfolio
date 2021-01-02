import { DoubleLeftOutlined, DoubleRightOutlined, RightOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./NextPageTouchArea.scss"

export enum Direction {
    Horizontal= "horizontal",
    Vertical= "vertical",
}

interface P {
    from?: string,
    to: string,
    direction?: Direction
}

export default function NextPageTouchArea(props: P){
    const {to, from, direction} = props

    const history = useHistory();
    console.log(history.location);

    const getNameFromPath = (path: any) => {
        const arr = path.split("/")
        return arr[arr.length -1];
    }

    return (
        <div>

            {from &&
                <Link to={from} className={`touch-area left ${props.direction ? `${props.direction}` : Direction.Horizontal}`}>
                    <div className="direction-container">
                        <DoubleLeftOutlined className="direction-icon"/>
                        <div className="direction-icon-text">{getNameFromPath(from)}</div>
                    </div>
                </Link>
            }
            <Link to={props.to} className={`touch-area right ${props.direction ? `${props.direction}` : Direction.Horizontal}`}>
                <div className="direction-container">
                    <DoubleRightOutlined className="direction-icon"/>
                    <div className="direction-icon-text">{getNameFromPath(to)}</div>
                </div>
            </Link>
        </div>
    )
}
