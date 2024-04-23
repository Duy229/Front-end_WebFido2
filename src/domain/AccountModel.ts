import { StatusEnum } from "./Enum"

export interface AccountModel {
    id: number
    firstName: string
    lastName: string
    imgUrl: string
    userName: string
    image: string
    email: {
        name: string
        verified: boolean
    }
    phone: {
        number: string
        verified: boolean
    }
    sex: 'male' | 'female'
    birthday: string
    lang: 'en' | 'de'
    country: string
    city: string
    address1: string
    address2?: string
    zipcode: number
    website?: string
    socials?: {
        twitter?: string
        facebook?: string
        linkedin?: string
    }
}

export class AccountRequestAdmin {
    id: string
    email: string
    login: string
    name: string
    password?: string
    status: string
    serverId?: string
    constructor(account?: AccountRequestAdmin) {
        this.id = account?.id || ''
        this.email = account?.email || ''
        this.name = account?.name || ''
        this.login = account?.login || ''
        this.password = account?.password || ''
        this.serverId = account?.serverId || ''
        this.status = account?.status || StatusEnum.INACTIVE
    }
}

export class AccountRequestUser {
    id: string
    email: string
    login: string
    name: string
    password?: string
    status: string
    accountId?: string
    constructor(account?: AccountRequestUser) {
        this.id = account?.id || ''
        this.email = account?.email || ''
        this.name = account?.name || ''
        this.login = account?.login || ''
        this.password = account?.password || ''
        this.accountId = account?.accountId || ''
        this.status = account?.status || StatusEnum.INACTIVE
    }
}

export interface AccountResponseServer {
    id: string
    email: string
    name: string
    status: string
    login: string
    imageUrl: string,
    imageBase64: string
    password: string
    createdDate: Date
    lastModifiedDate: Date
}

export interface AccountResponse {
    id: string
    email: string
    name: string
    status: string
    login: string
    imageUrl: string,
    imageBase64: string
    password: string
    createdDate: Date
    lastModifiedDate: Date
}

export interface ProfileResponse {
    name: string | undefined
    file: any
    validationSetting: any
}

export class ValidateSetting {
    integrityEnabled: boolean
    integrityReadonly: boolean
    originEnabled: boolean
    originReadonly: boolean
    ownerEnabled: boolean
    ownerReadonly: boolean
    constructor(validateSetting?: ValidateSetting) {
        this.integrityEnabled = validateSetting?.integrityEnabled || false
        this.integrityReadonly = validateSetting?.integrityReadonly || false
        this.originEnabled = validateSetting?.originEnabled || false
        this.originReadonly = validateSetting?.originReadonly || false
        this.ownerEnabled = validateSetting?.ownerEnabled || false
        this.ownerReadonly = validateSetting?.ownerReadonly || false
    }
}

export interface ValidateResponse {
    integrityEnabled: boolean,
    integrityReadonly: boolean,
    originEnabled: boolean,
    originReadonly: boolean,
    ownerEnabled: boolean,
    ownerReadonly: boolean
}

export interface AccessTokens {
    id: string
    platform: string
    subject: string
    role: string
    expireDate: string
    ipAddress: string
    createdDate: Date
    lastModifiedDate: Date
    userAgent: string
    current: boolean
}

export class AccountRequest {
    id: string
    email: string | null
    login: string
    name: string
    password?: string
    status: string
    constructor(account?: AccountRequest) {
        this.id = account?.id || ''
        this.email = account?.email || null
        this.name = account?.name || ''
        this.login = account?.login || ''
        this.password = account?.password || ''
        this.status = account?.status || StatusEnum.INACTIVE
    }
}

export interface AccountProfileRequest {
    email: string | undefined
    name: string | undefined
    file: any
}