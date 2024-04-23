import SFS_Login from "../Form/sfslogin"
// import { PageTitle } from '@app/components/common/PageTitle'
import React from 'react'
// import { useTranslation } from 'react-i18next'

const LoginPage: React.FC = () => {
    // const { t } = useTranslation()

    return (
        <>
            {/* <PageTitle>{t('common.login')}</PageTitle> */}
            <SFS_Login />
        </>
    )
}

export default LoginPage
