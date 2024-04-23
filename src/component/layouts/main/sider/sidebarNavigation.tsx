// /* eslint-disable @typescript-eslint/no-explicit-any */
// import {
//     AppstoreAddOutlined,
//     DatabaseOutlined,
//     LineChartOutlined,
//     MailOutlined,
//     ProfileOutlined,
//     UserOutlined
// } from '@ant-design/icons'
// import { Authority } from '@app/domain/AuthModel'
// import React from 'react'

// export interface SidebarNavigationItem {
//     title: string
//     key: string
//     url?: string
//     type?: number
//     children?: SidebarNavigationItem[]
//     icon?: React.ReactNode
//     roles: Authority[] | any
// }
// export const sidebarNavigation: SidebarNavigationItem[] = [
//     {
//         title: 'menus.dashboard',
//         key: 'dashboard',
//         url: 'web/dashboard',
//         type: 1,
//         icon: <AppstoreAddOutlined />,
//         roles: [],
//     },
//     {
//         title: 'menus.account',
//         key: 'account',
//         url: 'web/account',
//         type: 1,
//         icon: <UserOutlined />,
//         roles: [Authority.ADMIN, Authority.SERVER],
//     },
//     // {
//     //     title: 'menus.server',
//     //     key: 'server',
//     //     url: 'web/server',
//     //     icon: <CloudServerOutlined />,
//     //     roles: [],
//     // },
//     // {
//     //     title: 'menus.purchase',
//     //     key: 'purchase',
//     //     url: 'web/purchase',
//     //     type: 1,
//     //     icon: <ShoppingCartOutlined />,
//     //     roles: [Authority.ADMIN],
//     // },
//     // {
//     //     title: 'menus.package',
//     //     key: 'package',
//     //     type: 1,
//     //     url: 'web/package',
//     //     icon: <AppstoreAddOutlined />,
//     //     roles: [],
//     // },
//     // {
//     //     title: 'menus.session',
//     //     key: 'session',
//     //     url: 'web/session',
//     //     icon: <DeploymentUnitOutlined />,
//     //     roles: [],
//     // },
//     // {
//     //     title: 'menus.quota',
//     //     key: 'quota',
//     //     url: 'web/quota',
//     //     icon: <CarryOutOutlined />,
//     //     roles: [Authority.ADMIN],
//     // },
//     {
//         title: 'menus.dataReader',
//         key: 'dataReader',
//         url: 'web/dataReader',
//         icon: <DatabaseOutlined />,
//         roles: [],
//     },
//     {
//         title: 'menus.transaction',
//         type: 1,
//         key: 'transaction',
//         url: 'web/transaction',
//         icon: <LineChartOutlined />,
//         roles: [],
//     },
//     {
//         title: 'menus.email',
//         key: 'email',
//         url: 'web/email',
//         icon: <MailOutlined />,
//         roles: [Authority.SERVER],
//     },
//     {
//         title: 'menus.log',
//         key: 'log',
//         type: 1,
//         url: 'web/log',
//         icon: <ProfileOutlined />,
//         roles: [],
//     },
// ]
