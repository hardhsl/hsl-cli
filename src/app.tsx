import {hot} from "react-hot-loader/root";
import React, {Fragment, useEffect, useState} from "react";
import intl from 'react-intl-universal';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {ConfigProvider, BackTop} from "antd";
import zhCN from "antd/es/locale/zh_CN";
import enUS from 'antd/es/locale/en_US';
import 'antd/dist/antd.less';
import {createGlobalStyle} from "styled-components";
import {Scrollbars} from 'react-custom-scrollbars';
import {useDispatch} from 'redux-react-hook';
import './app.css';
// const _globalServices = new GlobalServices();
const locales = {
    "enUS": require('./lang/enUS.json'),
    "zhCN": require('./lang/zhCN.json'),
};
import {BasicLayout} from "@/layout/basicLayout";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
}
*, *::before, *::after {
    box-sizing: border-box;
}
html, body {
    width: 100%;
    height: 100%;
}
ul, li {
list-style: none;
}
#root {
  height: 100%;
  width: 100%;
  background-color: rgba(239,243,245,1);
}
`;
const styles = {
		Button: {
		  margin: '0 10px',
		},
		Input: {
		  width: '140px',
		},
		marginls: {
			
		}
    };

// sessionStorage.setItem('lang', 'enUS')
// const lang = sessionStorage.getItem('lang') == 'enUS' ? enUS : zhCN; 
const App: React.ComponentType = () => {
    const dispatch = useDispatch();
    const [ renderTrue , setRanderTrue ] = useState(false)
    useEffect(()=>{
        intl.init({
            currentLocale: 'zhCN', // TODO: determine locale here
            locales,
          }).then(() => {
            // After loading CLDR locale data, start to render
            setRanderTrue(true)
          });
    },[])
    return (
         <HashRouter>
            <ConfigProvider locale={zhCN}>
            { renderTrue && <Fragment>
                    <GlobalStyle/>
                    <Scrollbars id={"pageWrapper"} autoHide autoHideTimeout={1000} autoHideDuration={200}>
                        <BackTop visibilityHeight={300} target={() => {
                            const elementParent: HTMLElement | null = document.querySelector('#pageWrapper');
                            const element: any = elementParent && elementParent.children[0];
                            return element;
                        }}/>
                        <Switch>
                            <Route exact path={'/'} render={() => <Redirect to="/basic"/>}/>
                            <Route path="/basic/" component={BasicLayout}/>
                        </Switch>
                    </Scrollbars>
                </Fragment>
            } 
            </ConfigProvider>
        </HashRouter>
    );
};

export default hot(App);
