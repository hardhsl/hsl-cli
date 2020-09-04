
import React from 'react';
import { useDispatch } from 'redux-react-hook';
import { Button } from 'antd';
import '@/baseUI/base.css';
import {
    AbsoluteComponentHeader,
    AbsoluteComponentWrap,
    AbsoluteComponentFooter,
    AbsoluteComponentMain
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
    return (
        <div>
            <AbsoluteComponentWrap>
                <AbsoluteComponentHeader>
                    导入班级
                </AbsoluteComponentHeader>
                <AbsoluteComponentMain>
                    <h4>导入班级模板</h4>
                    <div style={styles.classEmptyExcalWrap}>
                        <span>图片占位</span>
                        <span>导入班级.xls</span>
                        <Button type="primary"  >下载</Button>
                    </div>
                    <div style={styles.importClicKButton}><Button className="Blue" >导入班级</Button></div>
                </AbsoluteComponentMain>

                <AbsoluteComponentFooter>
                    <Button type="primary" htmlType="submit" >确定</Button>
                    <Button className="Gray" style={{ 'marginLeft': '10px' }} onClick={()=>{
                        dispatch({
                            type: 'change ImportClassExcel hide'
                        })
                    }}>取消</Button>
                </AbsoluteComponentFooter>
            </AbsoluteComponentWrap>
        </div>
    )
};

export {
    ImportExcalComponent
};