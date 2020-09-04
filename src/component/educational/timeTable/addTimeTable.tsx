import React, { useState } from 'react';
import { AddTableWrap } from './ui';
import { Steps } from 'antd';

const { Step } = Steps;
import { AddTimeForm } from './addTimeForm';
import { SetCourse } from './setCourse';
import { AssignTeacher } from './assignTeacher';
const AddTimeTableMain = () => {
    let [ current,setCurrent ] = useState(2)
    const stepsNextSet = (): void=>{
        setCurrent(++current)
    }
    const stepsBackSet = (): void=>{
        setCurrent(current--)
    }
    return <div>
        <AddTableWrap>
            <div className="steps">
                <Steps current={current}>
                    <Step title="基础设置"  />
                    <Step title="选择课程"  />
                    <Step title="分配教师" />
                    <Step title="检查课表" />
                </Steps>
            </div>
            
            
        </AddTableWrap>
        <div className="addMain">
            { current == 0 && <AddTimeForm stepsNextSet={stepsNextSet} /> }
            { current == 1 && <SetCourse stepsNextSet={stepsNextSet} stepsBackSet={stepsBackSet} /> }
            { current == 2 && < AssignTeacher stepsNextSet={stepsNextSet} stepsBackSet={stepsBackSet} /> }
        </div>
    </div>
}

export{
    AddTimeTableMain
}