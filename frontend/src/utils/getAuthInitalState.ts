import { AuthState } from '@/store/slices/auth'

export default function getAuthInitalState(){

  const auth = window.localStorage.getItem("app-auth")

  if(auth){

    const localStorage = JSON.parse(auth)

    console.log("auth",localStorage)

    const initialState: AuthState = {
      isAuthenticated: true,
      isAppInitialized: false,
      auth: localStorage,
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

    console.log("empty auth-token",auth)

    return initialState
  }


}



