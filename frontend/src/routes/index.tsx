import React, { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate,useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { checkAuthorization } from '@/store/slices/auth';
import { params } from "@/utils/apiRequest";

import { PRIVATE, ERROR, AUTH } from "./routes";

import Loader from "@/component/common/loader";

const AuthLayout = lazy(() => import("@/layouts/authLayout"));
const AppLayout = lazy(() => import("@/layouts/appLayout"));

const Login = lazy(() => import("@/pages/auth/login"));
const Home = lazy(() => import("@/pages/home"));
const Product = lazy(() => import("@/pages/product"));
const Cart = lazy(() => import("@/pages/cart"));
const Error = lazy(() => import("@/pages/common/Error"));


const MainRoute: React.FC<any> = () => {

  const { isAuthenticated,auth,isAppInitialized } = useAppSelector(store => store.auth);
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch();


  useEffect(()=>{

    if(isAuthenticated){

      console.log("is Auhtenticated",isAuthenticated)
      console.log("is isAppInitialized",isAppInitialized)

      if(!isAppInitialized){
        const params : params = {
          payloadBody:{
            token: auth.token
          }
        };

        dispatch(checkAuthorization(params));

      }

      if(isAppInitialized){
        navigate(`${auth?.user}/home`)
      }

     
    }

    //  window.history.forward();

    if(!isAuthenticated && location.pathname !== '/auth/login'){
      navigate("/auth/login")
    }

  },[isAuthenticated,auth])

  return (
    <Suspense fallback={<Loader />}>

      <Routes>

      {/* Index Route */}

      <Route index element={<Navigate to="auth/login" />} />

        {/* Auth Routes */}

        <Route path={AUTH.BASE_PATH} element={<AuthLayout />}>

          <Route
            path={AUTH.PAGES.LOGIN}
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />

          <Route index element={<Navigate to={AUTH.PAGES.LOGIN} />} />

        </Route>

        {/* Privet Routes */}

        <Route
          path={PRIVATE.BASE_PATH}
          element={<AppLayout />}>

          <Route
            path={PRIVATE.USER.PAGES.HOME}
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />

        <Route
            path={PRIVATE.USER.PAGES.PRODUCT}
            element={
              <Suspense fallback={<Loader />}>
                <Product />
              </Suspense>
            }
          />


        <Route
            path={PRIVATE.USER.PAGES.CART}
            element={
              <Suspense fallback={<Loader />}>
                <Cart />
              </Suspense>
            }
          />

          <Route
            path={ERROR.CATCH_ALL}
            element={
              <Suspense fallback={<Loader />}>
                <Error type={404} />
              </Suspense>
            }
          />

          <Route index element={<Navigate to={PRIVATE.USER.PAGES.INDEX} />} />

        </Route>

        {/* Error Routes */}

        <Route
          path={ERROR.CATCH_ALL}
          element={
            <Suspense fallback={<Loader />}>
              <Error type={404} />
            </Suspense>
          }
        />

        <Route
          path={ERROR.ERROR_403}
          element={
            <Suspense fallback={<Loader />}>
              <Error type={403} />
            </Suspense>
          }
        />


      </Routes>

    </Suspense>
  );

};

export default MainRoute;
