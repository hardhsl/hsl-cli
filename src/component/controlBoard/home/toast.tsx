import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'redux-react-hook';

interface PropsData {
    data?: any,
}
const ToastComponent = (props: PropsData ) => {
    const dispatch = useDispatch();
    return <div className="toastWrap">
        <div className="toastComponent">
            <div className="toastHeader">{props.data.title}</div>
            <div className="toastMain">
                <p>{props.data.title}</p>
                <img src={props.data.img} />
                <Button className="Gray" style={{ marginTop:'20px',float:'right' }} onClick={()=>{
                    dispatch({
                        type:'change bannerDetailToast hide'
                    })
                }}>取消</Button>
            </div>
        </div>
    </div>
}

export {
    ToastComponent
}