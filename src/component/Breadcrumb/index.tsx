import React, { useEffect } from 'react';
import { Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';

// const BreadcrumbSub: React.ComponentType<MeetingStatusProps> = (props: MeetingStatusProps) => {
const BreadcrumbSubRouter = (props : any) => {
    //let obj = {}
    // let linkList = props.linkList.reduce((cur: any[],next: { link: string | number; }) => {
    //   obj[next.link] ? "" : obj[next.link] = true && cur.push(next);
    //   return cur;
    // },[]) 
    let linkList = props.linkList
    return (
        <Breadcrumb separator=">" style={{marginBottom:'20px'}}>
            {/* <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item> */}
            {
              linkList.map((item :any,index :number)=>{
                  return(
                    <Breadcrumb.Item key={index}>
                      <Link to={item.link ? item.link :''}>{ item.name }</Link>
                    </Breadcrumb.Item>
                  )
              })
            }
         </Breadcrumb>
    )
};
const BreadcrumbSub = withRouter(BreadcrumbSubRouter)
export {
    BreadcrumbSub
};