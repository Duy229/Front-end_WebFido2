import { Authority, LoginResponse, ProfileResponsive, QuotaResponsive } from '../domain/AuthModel'

const testAccount: LoginResponse = {
    timestamp: new Date(),
    status: 200,
    response: {
        clientId: '',
        token: '',
        id: '',
        subject: '',
        role: Authority.ADMIN,
        type: '',
        issuer: '',
        expiresAt: new Date(),
        clientName: '',
    }
}

export const persistToken = (token: string): void => {
    localStorage.setItem('token', token)
}

export const readToken = (): string | null => {
    return localStorage.getItem('token')
}

export const readProfile = (): string | null => {
    return localStorage.getItem('profile')
}


export const readLangues = (): string | null => {
    return localStorage.getItem('lng')
}

export const readClientId = (): string | null => {
    return localStorage.getItem('CIC-Client-Id')
}

export const readClientName = (): string | null => {
    return localStorage.getItem('CIC-Client-Name')
}

export const persistAccount = (user: LoginResponse): void => {
    localStorage.setItem('account', JSON.stringify(user))
}

export const persistProfile = (profile: ProfileResponsive): void => {
    localStorage.setItem('profile', JSON.stringify(profile));
};

export const persistQuota = (quota: QuotaResponsive): void => {
    localStorage.setItem('quota', JSON.stringify(quota));
};

export const readAccount = (): LoginResponse | null => {
    const accountrStr = localStorage.getItem('account')
    return accountrStr && accountrStr !== 'undefined' ? JSON.parse(accountrStr) : testAccount
}

export const readAuthority = (): Authority | string => {
    const account = readAccount()
    return account ? account.response.role : ''
}

export const deleteToken = (): void => localStorage.removeItem('token')
export const deleteProfile = (): null => {
    localStorage.removeItem('profile');
    return null;
};
export const deleteAccount = (): void => localStorage.removeItem('account')
