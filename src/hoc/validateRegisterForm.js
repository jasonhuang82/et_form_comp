import { withFormik } from 'formik';
import validatePassword from 'utils/validatePassword';

export default withFormik({
    // https://github.com/jaredpalmer/formik/issues/28
    // 沒有設定這個的話 Didmount input 一開始會拿到 undefined ，react 會認為他是 uncontrol input 會噴 warn
    mapPropsToValues: (props) => {
        return { 
            country: '',
            phone: '',
            name: '',
            password: '',
            confirmPassword: '',
            email: '',
            otp: '',
        };
    },
    initialValues: { 
        country: '',
        phone: '',
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        otp: '',
    },
    // https://cythilya.github.io/2019/03/12/formik-and-yup/
    // validate & validationSchema 只能則ㄧ存在
    // validate: values => {
    //     console.log('validate', values)
    //     let errors = {};
    //     if (!values.email) {
    //         errors.email = 'Email Required';
    //     } else if (
    //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //         errors.email = 'Invalid email address';
    //     }

    //     if (!values.customPassword) {
    //         errors.customPassword = 'customPassword Required';
    //     }
    //     return errors;
    // },

    validationSchema: props => {
        // https://github.com/jaredpalmer/formik/issues/145
        return validatePassword.lazy(values => {
            console.log('val', values)
            // let str = '';
            // switch(values.country){
            //     case "886":
            //         str = '台灣電話要必填'
            //         break;
            //     case "852":
            //         str  = '香港電話要必填'
            //         break;
            //     default:
            //         str = '這是必填欄位';
            //         break;

            // }
            return validatePassword.object().shape({
                phone: validatePassword
                    .string()
                    .required('這是必填欄位!'),
                name:  validatePassword
                    .string()
                    .required('這是必填欄位!'),
                password: validatePassword
                    .string()
                    .required('這是必填欄位!'),
                confirmPassword: validatePassword
                    .string()
                    .required('這是必填欄位!'),
                    // .string().customPassword(`The password format is wrong.`),
                email: validatePassword
                    .string()
                    .required('這是必填欄位!')
                    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, `It's illegal Email format the word @ must between Number and English.`),
                otp: validatePassword
                    .string()
                    .required('這是必填欄位!'),
            }) 
        })
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    },
    // 若要 submit 時在 validate 則 onChange onBlur 驗證 option 要關掉
    // validateOnChange: false,
    validateOnBlur: false,
    displayName: 'ValidateRegisterForm',
})