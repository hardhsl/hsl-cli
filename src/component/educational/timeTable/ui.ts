
import styled from 'styled-components';

const LessonLineTitleWrap = styled.div`
    display:flex;
    justify-content: space-between;
    span{
        width: 76px;
        text-align: center;
        display: inline-block;
        font-size: 12px;
    }
`;
const LessonLineListWrap = styled.ul`
    border-bottom: 1px solid #F1F1F1;
    height: 30px;
    display: flex;
    justify-content: space-around;
    margin-bottom: -10px;
`;
const LessonLineListLi = styled.li`
    width:76px;
    height:30px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    background:rgba(238,238,238,1);
    border-radius:6px 6px 0px 0px;
    display:inline-block;
    padding: 0 3px;
    font-size: 10px;
    transform:scale(0.9);
    line-height: 30px;
    margin-bottom: -20px;
    text-align: center;
`;
const LessonLineListLiEmpty = styled.li`
    width:76px;
    height:30px;
`
const GradeClassStudentWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
`;
const EmptyText = styled.span`
    font-size:14px;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(58,67,73,1);
    line-height:17px;
    margin-top:20px;
`;
const AddTableWrap = styled.div`
    .steps{
        padding: 0 150px;
        background:rgba(255,255,255,1);
        border-radius:10px;
        padding: 20px;
    }
    .addMain{
        
        
    }
`
const AddFromWrap = styled.div`
    display: flex;
    background:rgba(255,255,255,1);
    border-radius:10px;
    padding: 20px;
    margin: 20px 0;
    .from{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`
const SetCourseWrap = styled.div`
    padding: 10px;
    background:rgba(255,255,255,1);
    border-radius:10px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
    .setCourseLi{
        padding: 20px 15px 20px;
        background:rgba(245,251,250,1);
        border-radius:10px;
        .header{
            display: flex;
            justify-content: space-between;
            align-item: center;
            h5{
                color: #404444;
                font-size: 18px;
            }
            div{
                img{
                    width: 16px;
                    height: 16px;
                    margin-right: 10px;
                }
            }
        }
        .selectWrap{
            display:flex;
            align-items: center;
            margin: 10px 0;
            span{
                margin-right: 20px;
            }
            .select{
                width:218px;
                height:34px;
                background:rgba(255,255,255,1);
                border-radius:6px;
            }
        }
    }
`
const AssignTeacherWrap = styled.div`
    margin-top: 20px;
    width: 100%;
    .assTeacherLeft{
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        div{
            height: 76px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 2px solid #EDF2F2;
            cursor: pointer;
        }
        .activeGeade{
            background:linear-gradient(270deg,rgba(2,205,223,1),rgba(20,156,210,1));
            color: #fff;
        }
    }
    .assTeacherRight{
        padding-left: 20px;
        
        .assTeacherContent{
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            .assTeacherDiv{
                width:316px;
                height:122px;
                background:rgba(246,251,251,1);
                border:1px solid rgba(241,241,241,1);
                border-radius:10px;
                margin: 10px;
                padding: 30px 20px;
                h5{
                    font-size: 18px;
                    color: #404444;
                }
                div{
                    width:316px;
                    display:flex;
                    align-items: center;
                    span{
                        margin-right: 20px;
                    }
                    
                }
            }
        }
        
    }
`
// 新加课表
export{
    LessonLineTitleWrap,
    LessonLineListWrap,
    LessonLineListLi,
    LessonLineListLiEmpty,
    GradeClassStudentWrap,
    EmptyText,
    AddTableWrap,
    AddFromWrap,
    SetCourseWrap,
    AssignTeacherWrap
}