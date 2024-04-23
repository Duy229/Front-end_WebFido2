/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    ActivedAccountRequest,
    LoginRequest,
    LoginResponse,
    RefreshTokenRequest,
    RegistrationRequest,
    // ResetPasswordFinish
} from '../domain/AuthModel'
// import { readAuthority } from '../services/localStorage.service'
// import { readAuthority } from '@app/services/localStorage.service'
import { httpApi } from './http.api'

export const login = (loginPayload: LoginRequest): Promise<LoginResponse> =>
    httpApi.post<LoginResponse>('/auth/endpoint/access-token', { ...loginPayload }).then(({ data }) => data)

export const refreshToken = (payload: RefreshTokenRequest): Promise<LoginResponse> =>
    httpApi.post<LoginResponse>('/auth/token', { ...payload }).then(({ data }) => data)

export const logout = (): Promise<LoginResponse> =>
    httpApi.delete<LoginResponse>('/auth/logout').then(({ data }) => data)

export const registration = (registrationRequest: RegistrationRequest): Promise<undefined> =>
    httpApi.post<undefined>('auth/registration', { ...registrationRequest }).then(({ data }) => data)

// export const registrationRoleApp = (registrationRequest: RegistrationRequest): Promise<undefined> =>
//     httpApi.post<undefined>(`${readAuthority().toLocaleLowerCase()}/account`, { ...registrationRequest }).then(({ data }) => data)

// export const recoveryPassword = (resetPasswordFinish: ResetPasswordFinish): Promise<any> =>
//     httpApi.post<any>('auth/recovery', { ...resetPasswordFinish })

// export const resendEmailRecoveryAccount = (email: string): Promise<any> =>
//     httpApi.post<any>(`auth/recovery-code?email=${email}`)

export const activeAccount = (activeAccount: ActivedAccountRequest): Promise<any> =>
    httpApi.post<any>('auth/activation', { ...activeAccount })

export const resendEmailActiveAccount = (email: string): Promise<any> =>
    httpApi.post<any>(`auth/activation-code?email=${email}`)