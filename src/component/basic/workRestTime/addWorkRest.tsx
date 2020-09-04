import * as React from 'react';
import {useState, Fragment, useEffect} from 'react';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import {Button} from 'antd';
import {CSSTransition} from 'react-transition-group';
import {Scrollbars} from 'react-custom-scrollbars';


import {
    CrowWrapper,
    RightCrow,
    CrowHeader,
    CrowTitle,
    CrowContent,
    CrowFooter,
    CrowClose
} from '@/baseUI/Crow';


import { FormWorkRestComponent } from './form';

// interface EditorData {
//     type?: string;
//     startTime?: string;
//     endTime?: string;
//     closeFun?: any;
//     in?: boolean;
//     propsAgendaCount?: number;
//     editorOnExited?: any;
//     isAdmin: boolean;
// }

function WorkRestDialog(): any {
    const [show, setLoadingUser] = useState(false);
    return (
        <Fragment>
            <CSSTransition
                in={show}
                timeout={1000}
                unmountOnExit
                appear={true}
            >
                <CrowWrapper>
                    <Fragment>
                        <CSSTransition
                            in={show}
                            timeout={1000}
                            appear={true}
                        >
                            <RightCrow>
                                <CrowHeader>
                                    <CrowTitle>添加作息</CrowTitle>
                                    <CrowClose> 
                                        <Button  shape={"circle"} icon={<LegacyIcon type={"close"} />}/>
                                    </CrowClose>
                                </CrowHeader>
                                <CrowContent>
                                    <Scrollbars autoHide>
                                            <FormWorkRestComponent />
                                    </Scrollbars>
                                </CrowContent>
                                <CrowFooter className={"meeting-res-add-footer"}>
                                    {/* <ThemeOrange>
                                        <Button type={"primary"} onClick={() => saveTemplate()}>保存为模板</Button>
                                    </ThemeOrange> */}
                                    <Button type={"primary"}  >确定</Button>
                                </CrowFooter>

                            </RightCrow>
                        </CSSTransition>
                    </Fragment>
                </CrowWrapper>
            </CSSTransition>
        </Fragment>
    );
}

export {
    WorkRestDialog
};