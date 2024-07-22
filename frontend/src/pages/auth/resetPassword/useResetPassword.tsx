import { useFormik } from "formik";
import * as Yup from "yup";


const ResetSchema = Yup.object().shape({
  new_password: Yup.string().required('Password is mandatory.'),
  conform_password: Yup.string().required('Conform password is mandatory.')
});

const useResetPassword = () => {

  const HandleSubmit = async ({values}:any) => {

    const params = {
      conform_password: values.conform_password,
      new_password: values.new_password,
    };

    console.log("params",params)

    // navigate("/dashboard");

  };

  const formik = useFormik({

    initialValues: {
      new_password: "",
      conform_password: ""
    },
    
    validationSchema: ResetSchema,
    onSubmit: HandleSubmit,
    
  });

  return { formik };
  
};

export default useResetPassword;