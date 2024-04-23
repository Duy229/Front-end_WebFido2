// import { isRole } from '@app/utils/utils'
// import React from 'react'
// import { useTranslation } from 'react-i18next'
// import { Link, useLocation } from 'react-router-dom'
// import { SidebarNavigationItem, sidebarNavigation } from '../sidebarNavigation'
// import * as S from './SiderMenu.styles'

// interface SiderContentProps {
//     setCollapsed: (isCollapsed: boolean) => void,
//     mobileOnly: boolean
// }

// const sidebarNavFlat = sidebarNavigation.reduce(
//     (result: SidebarNavigationItem[], current) =>
//         result.concat(current.children && current.children.length > 0 ? current.children : current),
//     [],
// )

// const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed }) => {
//     const { t } = useTranslation()
//     const location = useLocation()

//     const partner = localStorage.getItem('partner')

//     console.log(partner);
    
//     let server;

//     if (partner && partner !== "undefined") {
//         console.log(123);
        
//         server = JSON.parse(partner);
//     }

//     const currentMenuItem = sidebarNavFlat.find(({ url }) => url === location.pathname)
//     const defaultSelectedKeys = currentMenuItem ? [currentMenuItem.key] : []

//     const openedSubmenu = sidebarNavigation.find(({ children }) =>
//         children?.some(({ url }) => url === location.pathname),
//     )
//     const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : []

//     return (
//         <div style={{height: 'calc(100vh - 90px)'}} className='relative'>
//             <S.Menu
//                 mode="inline"
//                 defaultSelectedKeys={defaultSelectedKeys}
//                 defaultOpenKeys={defaultOpenKeys}
//                 onClick={() => setCollapsed(true)}
//                 items={sidebarNavigation.map((nav) => {
//                     let isRoles = false
//                     const roles: string[] = nav.roles
//                     isRoles = isRole(roles)
//                     if ((isRoles && nav.url !== '/web') || !roles.length) {
//                         return {
//                             key: nav.key,
//                             title: t(nav.title),
//                             label: <Link to={`${nav.url}` || ''}>{t(nav.title)}</Link>,
//                             icon: nav.icon,
//                         }
//                     }
//                     return null
//                 })}
//             />
//             <p className='text-gray-400 text-xs italic absolute bottom-6 left-4'>{t('common.version')}: {server?.version}</p>
//         </div>
//     )
// }

// export default SiderMenu
