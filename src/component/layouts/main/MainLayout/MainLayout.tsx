// import { References } from '@app/components/common/References/References'
// import { useResponsive } from '@app/hooks/useResponsive'
// import React, { useEffect, useState } from 'react'
// import { Outlet, useLocation } from 'react-router-dom'
// import { Header } from '../../../header/Header'
// import MainContent from '../MainContent/MainContent'
// import { MainHeader } from '../MainHeader/MainHeader'
// import MainSider from '../sider/MainSider/MainSider'
// import * as S from './MainLayout.styles'

// const MainLayout: React.FC = () => {
//     const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true)
//     const [siderCollapsed, setSiderCollapsed] = useState(true)
//     const { isDesktop } = useResponsive()
//     const location = useLocation()

//     const toggleSider = () => setSiderCollapsed(!siderCollapsed)

//     useEffect(() => {
//         setIsTwoColumnsLayout(['//'].includes(location.pathname) && isDesktop)
//     }, [location.pathname, isDesktop])

//     return (
//         <S.LayoutMaster>
//             <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
//             <S.LayoutMain>
//                 <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
//                     <Header
//                         toggleSider={toggleSider}
//                         isSiderOpened={!siderCollapsed}
//                         isTwoColumnsLayout={isTwoColumnsLayout}
//                     />
//                 </MainHeader>
//                 <MainContent style={{ overflowY: 'auto' }} id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
//                     <div>
//                         <Outlet />
//                     </div>
//                     {!isTwoColumnsLayout && <References />}
//                 </MainContent>
//             </S.LayoutMain>
//         </S.LayoutMaster>
//     )
// }

// export default MainLayout
