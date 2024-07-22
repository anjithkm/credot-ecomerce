import React from "react";
import useLogin from "./useLogin";
import Button from "@/component/button";
import Input from "@/component/input";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginPage: React.FC = () => {

  const { formik, error , HandleClearError} = useLogin();

  return(
    <div className='login'>
    <div className='login-form'>
     <p className='login-title' style={{}}>Login/Register to your account</p>
     <p className='login-sub-title'>Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas placerat ut sagittionec.</p>
        <div className='login-form-container' style={{display:'flex',flexDirection:'column',margin:'auto auto 0px auto',width:'538px',marginTop:'auto'}}>
         <Input className="login-input"  name="username"
          onFocus={HandleClearError}
          placeholder="Enter your email address"
          type="text"
          disabled={formik.isSubmitting}
          value={formik.values.username}
          onChange={formik.handleChange}
          error={
            formik.touched.username && formik.errors.username
              ? formik.errors.username
              : ''
          }
          onBlur={formik.handleBlur}
          onKeyDown={(e: any) => {
            if (e.key === 'Enter') formik.handleSubmit();
          }} />
         <Input className="login-input"  name="password"
          onFocus={HandleClearError}
          placeholder="Enter your email password"
          type="password"
          disabled={formik.isSubmitting}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ''
          }
          onBlur={formik.handleBlur}
          onKeyDown={(e: any) => {
            if (e.key === 'Enter') formik.handleSubmit();
          }} />
         <Button className='boxed login-button'    disabled={!formik.isValid || formik.isSubmitting}
              onClick={() => {
                formik.handleSubmit();
              }} >login</Button>
          <div className="input-error login-error">
              { error && "Invalid user name or password. Try again"} 
          </div>
        </div>
      </div>
    </div>
  )

}




export default LoginPage;



