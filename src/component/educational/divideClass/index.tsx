import React, { useState, useEffect } from 'react';
import { Headers } from './headers';
import { Col, Row , Checkbox, Pagination} from 'antd';
import {
    PageCardDIvWrap,
    PageCardDIvWrapHeader,
    PageCardDIvWrapMain,
    PaginationFloatRight
} from '@/baseUI/pageCard';
// import {
//     FlexColumnCenter
// } from '@/baseUI/contentWrap';
import { Avatar } from '@/assert/img/base';
import { AutoDivideClassComponent } from './autoDivideClass';
import { Styles,
    LineSpan ,
    ClassSexDivideRateWrap,
    ClassSexDivideBoy,
    ClassSexDivideGirl,
    DivideClassList
} from './ui';
import {
    WorkRestListRightLessonWrap,
    WorkRestListRightSign,
    WorkRestListRightText,
    WorkRestListRightTextTop,
    WorkRestListRightTextTwo,
    WorkRestListRightTimeWrap,
    WorkRestListRightTimeText,
    WorkRestListRightTimeImg,
} from './ui';
import {IState} from '@/store';

const mapState = (state: IState): {
    VolDivideClass:boolean
} => { return { VolDivideClass: state.DivideClass.VolDivideClass }}
import { DivideClassActive,
    DivideClassFalse,
    DivideClassTrue ,
    EduAvatar,
    DivideClassStuEmpty
} from '@/assert/img/educational/';
import { useMappedState } from 'redux-react-hook';
const data = [
    {name:'叶良辰',id:'2020003420'},
    {name:'叶良辰',id:'2020003421'},
    {name:'叶良辰',id:'2020003422'},
    {name:'叶良辰',id:'2020003423'},
    {name:'叶良辰',id:'2020003424'},
    {name:'叶良辰',id:'2020003425'},
    {name:'叶良辰',id:'2020003426'},
    {name:'叶良辰',id:'2020003427'},
    {name:'叶良辰',id:'2020003428'},
    {name:'叶良辰',id:'2020003429'},
]
const gradeCoures: Array<object> = [
    { couresName:'一年一班', couresEnglish:'Chinese',couresNumber:'50',id:'1' },
    { couresName:'一年一班', couresEnglish:'Chinese',couresNumber:'50',id:'2'},
    { couresName:'一年一班', couresEnglish:'Chinese',couresNumber:'50',id:'3' },
    { couresName:'一年一班', couresEnglish:'Chinese',couresNumber:'50',id:'4'},
    { couresName:'一年一班', couresEnglish:'Chinese',couresNumber:'50',id:'5' },
    { couresName:'一年一班', couresEnglish:'Chinese',couresNumber:'50',id:'6' },
    { couresName:'一年一班', couresEnglish:'Chinese',couresNumber:'50',id:'7' },
    { couresName:'一年一班', couresEnglish:'Chinese',couresNumber:'50',id:'8' },
    { couresName:'一年一班', couresEnglish:'Chinese',couresNumber:'50',id:'9' },
    { couresName:'一年一班', couresEnglish:'Chinese',couresNumber:'50',id:'10' },
    { couresName:'一年一班', couresEnglish:'Chinese',couresNumber:'50',id:'11' },
]
const DivideClassMain = () => {
    const {
        VolDivideClass
    } = useMappedState(mapState);
    let selectAllList = ['2020003420','2020003421','2020003422','2020003423','2020003424','2020003425','2020003426','2020003427','2020003428','2020003429']
    let [ selectList, setSelectList] = useState<Array<String>>([])
    let [ selectClassList, setSelectClassList] = useState<Array<String>>([])
    let [ indeterminate, setIndeterminate] = useState(false)
    let [ checkAll, setCheckAll  ] = useState(false)
    let [ selectId, setSelectId ] = useState('1')
    const onCheckAllChange = (e: { target: { checked: React.SetStateAction<boolean>; }; }) => {
        setSelectList(e.target.checked ? selectAllList : [])
        setCheckAll(e.target.checked)
        setIndeterminate(false)
    }
    const selectChange = (id:string) => {
        if(selectList.indexOf(id) != -1){
            return {background:'rgba(228,237,237,1)',borderColor:'rgba(228,237,237,1)'}
        }
    }
    const selectClassChange = (id:string) => {
        if(selectClassList.indexOf(id) != -1){
            return {background:'rgba(228,237,237,1)',borderColor:'rgba(228,237,237,1)'}
        }
    }
    useEffect(() => {
        console.log(selectList,selectList.length,'长度',selectAllList.length)
        if(selectList.length == selectAllList.length){
            console.log(checkAll)
            setCheckAll(true)
        }else if(selectList.length > 0 && selectList.length < selectAllList.length){
            setIndeterminate(true)
        }
        setSelectList(selectList)
    }, [selectList]);
    return <div>
        <Headers />
        <Row>
            <Col span={16} style={{ paddingRight:'10px' }}>
                <PageCardDIvWrap style={{ margin:'20px 0 20px 0' }}>
                    <PageCardDIvWrapHeader>
                        <span>未分班学生</span>
                        <Checkbox 
                            indeterminate={indeterminate}
                            onChange={onCheckAllChange}
                            checked={checkAll}
                            style={{ float:'right' }}
                         />
                    </PageCardDIvWrapHeader>
                    <PageCardDIvWrapMain style={{ 'maxHeight':'425px',padding:'0 5px' }}>
                        {
                            data.map((item,index)=>{
                                return <DivideClassList key={index} style={selectChange(item.id)} onClick={()=>{
                                    if(selectList.indexOf(item.id) != -1){
                                        let arr =JSON.parse(JSON.stringify(selectList)) 
                                        arr.splice(selectList.indexOf(item.id),1)
                                        setSelectList(arr)
                                        
                                    }else{
                                        setSelectList((selectList)=>[...selectList,item.id])
                                    }
                                    
                                }}>
                                    <img src={EduAvatar} style={Styles.divideClassImg}/>
                                    <span>{item.name}</span>
                                    <span>{item.id}</span>
                                </DivideClassList>
                            })
                        }
                        <PaginationFloatRight>
                            <Pagination
                            style={{float:'right'}}
                            showSizeChanger
                            showQuickJumper
                            current={1 > 0 ? 2 : 3}
                            pageSize={1 > 0 ? 10 : 2}
                            // onChange={(page): void => {
                            //     dispatch({
                            //         type: 'change accessGroup page',
                            //         page: page
                            //     });
                            // }}
                            pageSizeOptions={['8', '16']}
                            total={1 > 0 ? 20 : 2}
                        />
                    </PaginationFloatRight>
                    </PageCardDIvWrapMain>
                </PageCardDIvWrap>
                <PageCardDIvWrap >
                    <PageCardDIvWrapHeader>分班情况</PageCardDIvWrapHeader>
                    <PageCardDIvWrapMain style={{ 'padding':'0 15px',margin:'0 -10px','minHeight':'200px' }}>
                        {
                            gradeCoures.map((item: any,index: number)=>{
                                return(
                                    <WorkRestListRightLessonWrap key={index} style={ selectId == item.id ? index%2 == 0 ? Styles.SelectDivideClassTrue : Styles.SelectDivideClassFalse : {} } onClick={()=>{
                                        setSelectId(item.id)
                                    }}>
                                        <WorkRestListRightSign style={index%2 == 0 ? { background:'#02CDDF' } : {background:'#F8C68A'}}/>
                                        <WorkRestListRightText>
                                            <WorkRestListRightTextTop>{item.couresName}</WorkRestListRightTextTop>
                                            <WorkRestListRightTextTwo>{item.couresEnglish}</WorkRestListRightTextTwo>
                                        </WorkRestListRightText>
                                        <WorkRestListRightTimeWrap>
                                            <WorkRestListRightTimeImg src={selectId == item.id ? DivideClassActive : index%2 == 0  ? DivideClassTrue : DivideClassFalse}></ WorkRestListRightTimeImg>
                                            <WorkRestListRightTimeText>{item.couresNumber}人</WorkRestListRightTimeText>
                                        </WorkRestListRightTimeWrap>
                                    </WorkRestListRightLessonWrap>
                                )
                            })
                        }
                    </PageCardDIvWrapMain>
                </PageCardDIvWrap>
            </Col>
            <Col span={8} style={{ paddingLeft:'10px' }}>
                <PageCardDIvWrap style={{ marginTop:'20px' }}>
                    <PageCardDIvWrapHeader>一年一班</PageCardDIvWrapHeader>
                    <PageCardDIvWrapMain style={{ 'padding':'20px 20px 0','flexDirection':'column' }}>
                       <p>已有人数：49 人</p>
                       <p>年龄区间：15 岁   ~   17 岁</p>
                       <p>民族组成：汉族、满族、朝鲜族、回族</p>
                       <LineSpan />
                       <h4>男女比例</h4>
                       <ClassSexDivideRateWrap>
                            <ClassSexDivideBoy style={{width:'53%'}}><span style={{...Styles.ClassSexSpanBoy,'position':'absolute'}}>男生25人</span></ClassSexDivideBoy>
                            <ClassSexDivideGirl style={{width:'50%'}}><span style={{...Styles.ClassSexSpanGirl,'position':'absolute'}} >女生25人</span></ClassSexDivideGirl>
                       </ClassSexDivideRateWrap>
                       <LineSpan style={{ margin:'20px 0' }} />
                       <h4>班级学生</h4>
                       <PageCardDIvWrapMain style={{ 'height':'433px',margin:'0 -10px' }}>
                        {
                            data.map((item,index)=>{
                                return <DivideClassList key={index} style={selectClassChange(item.id)} onClick={()=>{
                                    if(selectClassList.indexOf(item.id) != -1){
                                        let arr =JSON.parse(JSON.stringify(selectClassList)) 
                                        arr.splice(selectClassList.indexOf(item.id),1)
                                        setSelectClassList(arr)
                                        
                                    }else{
                                        setSelectClassList((selectClassList)=>[...selectClassList,item.id])
                                    }
                                }}>
                                    <img src={EduAvatar} style={Styles.divideClassImg}/>
                                    <span>{item.name}</span>
                                    <span>{item.id}</span>
                                </DivideClassList>
                            })
                        }
                    </PageCardDIvWrapMain>
                    </PageCardDIvWrapMain>
                </PageCardDIvWrap>
            </Col>
        </Row>
        { VolDivideClass && <AutoDivideClassComponent />}
    </div>
}

export{
    DivideClassMain
}