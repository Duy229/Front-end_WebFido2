// /* eslint-disable react-hooks/exhaustive-deps */
// import { SettingsOverlay } from '@app/components/header/components/settingsDropdown/settingsOverlay/SettingsOverlay/SettingsOverlay'
// import { readToken } from '@app/services/localStorage.service'
// import React, { useEffect } from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'
// import * as S from './AuthLayout.styles'

// const AuthLayout: React.FC = () => {
//     const navigate = useNavigate()

//     useEffect(() => {
//         const token = readToken()
//         if (token) {
//             navigate('/')
//         }
//     }, [])

//     return (
//         <S.Wrapper className='relative'>
//             <div className='absolute top-10 right-10'>
//                 <SettingsOverlay />
//             </div>
//             <div className='flex items-center justify-evenly w-screen h-screen overflow-hidden bg-white'>
//                 <img className='hidden md:block' src='/bannerAuth.svg' alt='' width={600} />
//                 <S.LoginWrapper>
//                     <Outlet />
//                 </S.LoginWrapper>
//             </div>
//         </S.Wrapper>
//     )
// }

// export default AuthLayout
