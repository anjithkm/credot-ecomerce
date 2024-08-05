import { AuthState } from '@/store/slices/auth'
import { LOCAL_STORAGE_AUTH } from '@/config/const'

export default function getAuthInitalState(){

  const auth = window.localStorage.getItem(LOCAL_STORAGE_AUTH)

  if(auth){

    const auth_JSON = JSON.parse(auth)

    console.log("auth",auth_JSON)

    const initialState: AuthState = {
      isAuthenticated: true,
      isAppInitialized: false,
      auth: auth_JSON,
      error: false,
      loading: false,
      errorMessage: {},
    };
   
    // const params :params = {
    //   payloadBody:{
    //     token:token
    //   }
    // }
    // const response = await AuthService.checkAuthorization(params)
    // console.log("check response",response)
    // dispatch(login(params));

    return initialState

  }else{

    const initialState: AuthState = {
      isAuthenticated: false,
      isAppInitialized: false,
      auth: {},
      error: false,
      loading: false,
      errorMessage: {},
    };

    console.log("empty auth",auth)

    return initialState
  }


}



