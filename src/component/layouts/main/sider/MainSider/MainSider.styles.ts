// import { BaseButton } from '@app/components/common/BaseButton/BaseButton'
// import { BaseLayout } from '@app/components/common/BaseLayout'
// import { LAYOUT, media } from '@app/styles/themes/constants'
// import { Link } from 'react-router-dom'
// import styled, { css } from 'styled-components'

// export const Sider = styled(BaseLayout.Sider)`
//     position: fixed;
//     overflow: visible;
//     right: 0;
//     z-index: 5;
//     min-height: 100vh;
//     max-height: 100vh;

//     color: var(--text-secondary-color);

//     @media only screen and ${media.md} {
//         right: unset;
//         left: 0;
//     }

//     @media only screen and ${media.xl} {
//         position: unset;
//     }
// `

// export const CollapseButton = styled(BaseButton)<{ $isCollapsed: boolean }>`
//     background: var(--collapse-background-color);

//     border: 1px solid var(--border-color);
//     transition: all 0.2s ease;
//     position: absolute;
//     right: 0.5rem;

//     ${(props) =>
//         props.$isCollapsed &&
//         css`
//             right: -1rem;
//         `}

//     color: var(--text-secondary-color);

//     &:hover {
//         color: var(--text-secondary-color);
//         background: var(--primary-color);
//         border: 1px solid var(--border-color);
//     }

//     &:focus {
//         color: var(--text-secondary-color);
//         background: var(--primary-color);
//         border: 1px solid var(--border-color);
//     }
// `

// export const SiderContent = styled.div`
//     overflow-y: auto;
//     overflow-x: hidden;
//     max-height: calc(100vh - ${LAYOUT.mobile.headerHeight});

//     @media only screen and ${media.md} {
//         max-height: calc(100vh - ${LAYOUT.desktop.headerHeight});
//     }
// `

// export const SiderLogoLink = styled(Link)`
//     display: flex;
//     align-items: center;
//     overflow: hidden;
//     position: relative;
//     @media (max-width: 1279px) {
//         margin: 0 auto;
//     }
// `

// export const LogoContainer = styled.div`
//     display: inline-block;
//     @media (max-width: 1279px) {
//         display: none;
//     }
// `

// export const SiderLogoDiv = styled.div`
//     height: ${LAYOUT.mobile.headerHeight};
//     padding: ${LAYOUT.mobile.headerPadding};
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     @media only screen and ${media.md} {
//         height: ${LAYOUT.desktop.headerHeight};
//         padding-top: ${LAYOUT.desktop.paddingVertical};
//         padding-bottom: ${LAYOUT.desktop.paddingVertical};
//     }
// `

// export const BrandSpan = styled.span`
//     margin: 0 1rem;
//     font-weight: 700;
//     font-size: 1.125rem;
//     color: var(--white);
// `
