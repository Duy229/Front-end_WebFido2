
export interface AuthData {
    email: string
    password: string
}

export interface RegistrationRequest {
    email: string
    name: string
    login: string
}

export interface ResetPasswordRequest {
    email: string
}

export interface ResetPasswordFinish {
    key: string | undefined
    newPassword: string
}

export interface ActivedAccountRequest {
    verifyCode: string | undefined
    email: string
    password: string
}

export interface RecoveryPasswordRequest {
    verifyCode: string | undefined
    email: string
    password: string
}

export interface SecurityCodePayload {
    code: string
}

export interface NewPasswordFinish {
    key: string | undefined
    newPassword: string
}

export class LoginRequest {
    account: string
    password: string
    remember?: boolean
    constructor() {
        this.account = ''
        this.password = ''
        this.remember = true
    }
}

export class LoginSystemRequest {
    serverId: string
    serverSecret: string
    constructor() {
        this.serverId = ''
        this.serverSecret = ''
    }
}

export class RefreshTokenRequest {
    account: string
    password: string
    remember?: boolean
    constructor() {
        this.account = ''
        this.password = ''
        this.remember = true
    }
}

export interface LoginResponse {
    timestamp: Date
    status: number,
    response: {
        clientId: string
        token: string
        id: string
        subject: string
        role: Authority
        type: string
        issuer: string
        expiresAt: Date
        clientName: string
    }
}

export interface ProfileResponsive {
    email: string
    imageBase64: string | null
    imageUrl: string | null
    name: string
}

export interface QuotaResponsive {
    accountId: string;
    quotaType: string;
    quotaIntegrity: Record<string, unknown>; 
    quotaLegitimacy: Record<string, unknown>;
    quotaFaceLiveness: Record<string, unknown>; 
    quotaDataExtraction: Record<string, unknown>; 
    quotaUser: Record<string, unknown>;
    expiration: Date;
}


export enum Authority {
    ADMIN = 'ADMIN',
    SYSTEM = 'SYSTEM',
    SERVER = 'SERVER',
    USER = 'USER',
}

export interface ApiResponse {
    message: string
    object: LoginResponse
}

export interface ChangePasswordRequest {
    currentPassword: string
    newPassword: string
}

