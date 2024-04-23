// import { RightOutlined } from '@ant-design/icons'
// import { useAppSelector } from '@app/hooks/reduxHooks'
// //import logoDark from 'assets/logo-details-dark.png'
// import logo from '@app/assets/logo.png'
// import { useResponsive } from '@app/hooks/useResponsive'
// import React from 'react'
// import * as S from './MainSider/MainSider.styles'

// interface SiderLogoProps {
//     isSiderCollapsed: boolean
//     toggleSider: () => void
// }
// export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
//     const { tabletOnly } = useResponsive()

//     const partner = localStorage.getItem('partner')

//     let server;

//     if (partner && partner !== "undefined") {
//         server = JSON.parse(partner);
//     }

//     const theme = useAppSelector((state) => state.theme.theme)

//     const img = theme === 'dark' ? logo : logo

//     return (
//         <S.SiderLogoDiv>
//             <S.SiderLogoLink to="/web">
//                 <img src={img} alt="CCCD" width={50} />
//                 <S.LogoContainer>
//                     <p
//                         style={{
//                             fontSize: '20px',
//                             color: '#27c1c7',
//                             marginLeft: '12px',
//                             fontWeight: 'bold',
//                             letterSpacing: '5px',
//                         }}
//                     >
//                         STID
//                     </p>
//                     <p style={{ fontSize: '16px', color: '#27c1c7', marginLeft: '12px' }}> {server?.name ? server?.name : 'CIC Server'}</p>
//                 </S.LogoContainer>
//             </S.SiderLogoLink>
//             {tabletOnly && (
//                 <S.CollapseButton
//                     shape="circle"
//                     size="small"
//                     $isCollapsed={isSiderCollapsed}
//                     icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
//                     onClick={toggleSider}
//                 />
//             )}
//         </S.SiderLogoDiv>
//     )
// }
