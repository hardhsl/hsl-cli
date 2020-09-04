import React, { useEffect, useState } from 'react';
import { Icon  } from '@ant-design/compatible';
import { Menu, Affix } from 'antd';

const { SubMenu } = Menu;
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import {
    PageSiderMenuWrapper,
    PageSiderMenuHeader,
    PageSiderMenuTitle
} from '@/baseUI/PageSider';

import { SideBarIcon } from './ui';

interface LinkObj {
    name: string;
    link: string;
    icon: string;
    show: boolean;
    iconActive: string;
    baseIcon?: string;
    children?: LinkObj[];
}

interface SideBarProps extends RouteComponentProps {
    title: string;
    defaultKey: string;
    linkArray: LinkObj[];
}

const SideBar: React.ComponentType<SideBarProps> = (props: SideBarProps) => {
    const [key, setKey] = useState<string>(props.defaultKey);
    const [openKey, setOpenKey] = useState<string[]>([]);

    useEffect(() => {
        props.linkArray.map((item): void => {
            if (item.children) {
                for (let i = 0; i < item.children.length; i++) {
                    if (props.location.pathname.indexOf(item.children[i].link) !== -1) {
                        setKey(item.children[i].link);
                        setOpenKey([item.link]);
                    }
                }
            } else {
                if (props.location.pathname.indexOf(item.link) !== -1) {
                    console.log(item.link,'item.link')
                    setKey(item.link);
                }
            }
        });
    }, [props.linkArray, props.location.pathname]);
    const elementParent: HTMLElement | null = document.querySelector('#pageWrapper');
    const element: any = elementParent && elementParent.children[0];
    return (
        <Affix target={() => element}>
            <PageSiderMenuWrapper>
                <div style={{'height':'24px'}}></div>
                <Menu
                    mode="inline"
                    theme="light"
                    selectedKeys={[key]}
                    openKeys={openKey}
                    // onOpenChange={(keys) => {
                    //     setOpenKey(keys);
                    // }}
                >
                    {
                        props.linkArray.map((item: LinkObj, index: number) => {
                            if (item.children) {
                                return (
                                    <SubMenu
                                        key={item.link}
                                        title={
                                            <span>
                                                {
                                                    item.baseIcon ? <Icon type={item.baseIcon} /> : <SideBarIcon
                                                        key={item.link}
                                                        src={props.location.pathname.indexOf(item.link) !== -1 ? item.iconActive : item.icon}
                                                        alt={'icon'} />
                                                }
                                                <span >{item.name}</span>
                                            </span>
                                        }
                                    >
                                        {
                                            item.children.map((children: LinkObj, index: number) => {
                                                return (
                                                    <Menu.Item key={children.link}>
                                                        <Link to={children.link}>{children.name}</Link>
                                                    </Menu.Item>
                                                );
                                            })
                                        }
                                    </SubMenu>
                                );
                            }
                            return item.show ? <Menu.Item key={item.link} className={props.location.pathname.indexOf(item.link) !== -1 ? 'ant-menu-item-selected': ''}>
                                <Link to={item.link}>{
                                    item.baseIcon ? <Icon type={item.baseIcon} /> : <SideBarIcon
                                        key={item.link}
                                        src={props.location.pathname.indexOf(item.link) !== -1 ? item.iconActive : item.icon}
                                        alt={'icon'} />
                                }<span style={props.location.pathname.indexOf(item.link) !== -1 ? {'color': '#1EB6AE'}: {}}>{item.name}</span></Link>
                            </Menu.Item> : null;
                        })
                    }
                </Menu>
            </PageSiderMenuWrapper>
        </Affix>
    );
};

export default withRouter(SideBar as any);
