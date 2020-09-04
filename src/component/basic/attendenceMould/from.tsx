import React from 'react';
import {
    AbsoluteComponentWrap,
    AbsoluteComponentHeader,
    AbsoluteComponentFooter,
    AbsoluteComponentMain
  } from '@/baseUI/pageCard';
import { Button } from 'antd';
import {useDispatch} from 'redux-react-hook';

const AddAttendenceMould = () => {
    const dispatch = useDispatch();
    return (
        <AbsoluteComponentWrap>
            <AbsoluteComponentHeader>新增模板</AbsoluteComponentHeader>
            <AbsoluteComponentMain>
                
            </AbsoluteComponentMain>
            <AbsoluteComponentFooter>
                <Button type="primary">确定</Button>
                <Button className="Gray" style={{ 'marginLeft': '10px' }} onClick={()=>{
                    dispatch({
                        type: 'change addAttendenceMould hide',
                        data:''
                    })
                }}>取消</Button>
            </AbsoluteComponentFooter>
        </AbsoluteComponentWrap>
    )

}

export {
    AddAttendenceMould
}