
import React, { useState } from 'react';
import { useDispatch } from 'redux-react-hook';
import { Button, message, Upload } from 'antd';
import '@/baseUI/base.css';
import intl from 'react-intl-universal';
import { ImportImg } from '@/assert/img/base';
import {
    AbsoluteComponentHeader,
    AbsoluteComponentWrap,
    AbsoluteComponentFooter,
    AbsoluteComponentMain,
    ImportImgShowDIv
} from '@/baseUI/pageCard';
const styles = {
    classEmptyExcalWrap:{
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '114px',
        border: '1px solid rgba(218,225,228,1)',
        borderRadius: '6px',
        marginTop: '20px'
    },
    importClicKButton: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center'
    }
}
const ImportExcalComponent = () => {
    const dispatch = useDispatch()
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info:any) {
            // console.log(info,'info')
        //   if (info.file.status !== 'uploading') {
        //     console.log(info.file, info.fileList);
        //   }
        //   if (info.file.status === 'done') {
        //     message.success(`${info.file.name} file uploaded successfully`);
        //   } else if (info.file.status === 'error') {
        //     message.error(`${info.file.name} file upload failed.`);
        //   }
        },
      };
    return (
        <div>
            <AbsoluteComponentWrap>
                <AbsoluteComponentHeader>
                    { intl.get('STUDENT_PINGJIA.DAORU_PINGJIA') }
                </AbsoluteComponentHeader>
                <AbsoluteComponentMain>
                    <h4> { intl.get('STUDENT_PINGJIA.DAORU_PINGJIA_MOBAN') }</h4>
                    <div style={styles.classEmptyExcalWrap}>
                        <ImportImgShowDIv src={ImportImg}/>
                        <span>导入班级.xls</span>
                        <Button type="primary"  size="small"> { intl.get('STUDENT_PINGJIA.DOWNLOAD') }</Button>
                    </div>
                    <div style={styles.importClicKButton}>
                        <Upload {...props}><Button className="Blue" >{ intl.get('STUDENT_PINGJIA.DAORU_PINGJIA') }</Button></Upload>
                    </div>
                </AbsoluteComponentMain>

                <AbsoluteComponentFooter>
                    <Button type="primary" htmlType="submit" >{ intl.get('STUDENT_PINGJIA.QUEDING') }</Button>
                    <Button className="Gray" style={{ 'marginLeft': '10px' }} onClick={()=>{
                        dispatch({
                            type: 'change ImportStudentAttend hide'
                        })
                    }}>{ intl.get('STUDENT_PINGJIA.QUXIAO') }</Button>
                </AbsoluteComponentFooter>
            </AbsoluteComponentWrap>
        </div>
    )
};

export {
    ImportExcalComponent
};