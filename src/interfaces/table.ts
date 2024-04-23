// import { AccountResponse } from '@app/domain/AccountModel'
// import { PackageResponse } from '@app/domain/PackageModel'
// import { ColumnsType } from 'antd/es/table'

export interface RestResponse<T> {
    timestamp: Date
    status: number
    error: string
    message: string
    errors: unknown
    response: T
}


export interface Pagination {
    current?: number
    pageSize?: number
    total?: number
}

export interface TableData {
    data: [] | null
    pagination: Pagination
    loading: boolean
}

export const initialPagination: Pagination = {
    current: 1,
    pageSize: 10,
}

// export const initUserResponse: AccountResponse = {
//     id: '',
//     email: '',
//     name: '',
//     status: '',
//     login: '',
//     imageUrl: '',
//     imageBase64: '',
//     password: '',
//     createdDate: new Date(),
//     lastModifiedDate: new Date(),
// }

// export const initPakageResponse: PackageResponse = {
//     id: '',
//     name: '',
//     type: '',
//     activatedDate: new Date,
//     amount: 0,
//     status: '',
//     createdDate: new Date(),
//     lastModifiedDate: new Date(),
// }

export const initialTableData: TableData = {
    data: [] || null,
    pagination: initialPagination,
    loading: false,
}

export interface TableLayoutProps {
    title: string
    accountId?: any
    serverId?: any
    showDays?:any
    // columns: ColumnsType<any>
    tableData: TableData
    showButtonCreate?: boolean
    showButtonClose?: boolean
    toDate?: any
    fromDate?: any,
    onOpenModal?: () => void | undefined
    onChange?: (e: Pagination) => void
    onClose?: (e: any) => void
    handleSelect?: (e: any) => void
    handleSelectServer?: (e: any) => void
    changeRange?: (a: any, b: any) => void
    onChangeDays?:(a: any, b: any) => void
}
