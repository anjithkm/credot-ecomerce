import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { login ,clearError} from '@/store/slices/auth';
import { params } from '@/utils/apiRequest'
import { useAppDispatch, useAppSelector } from '@/store/hooks';

interface Values {
  username: string;
  password: string;
}
// .email("The email you entered is incorrect. Try again."),
const LoginSchema = Yup.object().shape({
  username: Yup.string().required('User name is mandatory.'),
  password: Yup.string().required('Password is mandatory.')
});


const useLogin = () => {

  const dispatch = useAppDispatch();
  const { error } = useAppSelector(store => store.auth);

  const HandleSubmit = async ( values: Values, { setSubmitting }: FormikHelpers<Values>) => {

      setSubmitting(true);

      const params : params = {
        payloadBody:{
          username: values.username,
          password: values.password,
        }
      };

      dispatch(login(params));
      setSubmitting(false);


  };

  const HandleClearError = ()=>{
    dispatch(clearError())
  }


  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: HandleSubmit,
    enableReinitialize: true,
  });

  return {formik, error , HandleClearError };
  
};

export default useLogin;
