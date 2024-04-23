
import { AccountResponse } from '../domain/AccountModel';
import { RestResponse } from '../interfaces/table';
import { readAuthority } from '../services/localStorage.service';
import { httpApi } from './http.api';


export const findAllAccount = (): Promise<RestResponse<AccountResponse>> =>

    httpApi.get<RestResponse<AccountResponse>>(`${readAuthority().toLocaleLowerCase()}/endpoint/users`).then(({ data }) => data)

export const createAccount = (request: any): Promise<any> =>
    httpApi
        .post<any>(`webauthn/attestation/options`, { ...request })
        .then(({ data }) => data)

export const attestationAccount = (request: any): Promise<any> =>
    httpApi
        .post<any>(`webauthn/attestation/result`, { ...request })
        .then(({ data }) => data)

        
        
        export const loginAccount = (username: string): Promise<any> =>
          httpApi
        .post<any>(`webauthn/assertion/options`, { username })
        .then(({ data }) => data)

        interface AssertionResponse {
          status: string;
          errorMessage: string;
          id: string;
          name: string;
          format: string;
          credentialId: string;
          aaguid: string;
          createdDate: string;
          lastAccess: string;
          counter: number;
          userId: string;
          username: string;
          transports: any[];
        }

      export const assertionAccount = async (request: any): Promise<AssertionResponse> => {
        const response = await httpApi.post<any>('webauthn/assertion/result', { ...request });
        return response.data;
      };
      

    //   export const assertionAccount = (request: any): Promise<any> =>
    // httpApi
    //     .post<any>(`webauthn/assertion/result`, { ...request })
    //     .then(({ data }) => data)

        


export const createUserp =(request: any): Promise<any> =>
    httpApi
        .post<any>('/user', {...request})
        .then(({data}) => data)
        
export const loginUserp =(request: any): Promise<any> =>
    httpApi
        .post<any>('/login', {...request})
        .then(({data}) => data)


export const getUserByUsername = (): Promise<any> =>
    httpApi
      .get<any>(`/getUser/${localStorage.getItem('username')}`)
      .then(({ data }) => data)
      .catch(error => {
        throw new Error(`Error fetching user data: ${error}`);
      });
      
      export const findUser = (_username: string): Promise<any> =>
        httpApi
      .get<any>(`/getUser/${_username}`)
      .then(({ data }) => data)
      .catch(error => {
        throw new Error(`Error fetching user data: ${error}`);
      });
      export const findUserByNum = (_username: string): Promise<any> =>
        httpApi
      .get<any>(`/${_username}`)
      .then(({ data }) => data)
      .catch(error => {
        throw new Error(`Error fetching user data: ${error}`);
      });
      export const getUserByNum = (): Promise<any> =>
          httpApi
            .get<any>(`/${localStorage.getItem('username')}`)
            .then(({ data }) => data)
            .catch(error => {
              throw new Error(`Error fetching user data: ${error}`);
            });
            
            export const getAuthenticator = ():Promise<any> =>
              httpApi
            .get<any>(`/getAuthenticator/${localStorage.getItem('userId')}`)
            .then(({ data }) => data)
            .catch(error => {
              throw new Error(`Error fetching user data: ${error}`);
            });

   interface TransactionData {
    sender_username: string;
    receiver_username: string;
    sender_card_num: number;
    receiver_card_num: number;
    money_amount: string;
  }
  
  export const transaction = (transactionData: TransactionData): Promise<any> =>
    httpApi
      .post<any>('/transaction', transactionData)
      .then(({ data }) => data)
      .catch(error => {
        throw new Error(`Error fetching user data: ${error}`);
      });

      export const delAuthenticator = (authenticatorId: string): Promise<any> =>
        httpApi
            .delete<any>(`/delAuthenticator/${localStorage.getItem('userId')}/${authenticatorId}`)
            .then(({ data }) => data)
            .catch(error => {
                throw new Error(`Error deleting authenticator: ${error}`);
            });


      export const updateAuthenticator = (updateName: string): Promise<any> =>
        httpApi
            .put<any>(`/updateAuthenticator/${localStorage.getItem('userId')}/${localStorage.getItem('authnId')}`,{ name: updateName })
            .then(({ data }) => data)
            .catch(error => {
                throw new Error(`Error deleting authenticator: ${error}`);
            });
    

