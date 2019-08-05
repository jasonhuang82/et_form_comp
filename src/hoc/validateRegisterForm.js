import { withFormik } from 'formik';
import validatePasswordYup from 'utils/validatePassword';

export default withFormik({
    // https://github.com/jaredpalmer/formik/issues/28
    // 沒有設定這個的話 Didmount input 一開始會拿到 undefined ，react 會認為他是 uncontrol input 會噴 warn
    mapPropsToValues: (props) => {
        return { 
            country: '',
            phone: '',
            addressArea: '',
            addressDetail: '',
            name: '',
            password: '',
            confirmPassword: '',
            email: '',
            otp: '',
            agree: false,
        };
    },
    // https://cythilya.github.io/2019/03/12/formik-and-yup/
    // validate & validationSchema 只能則ㄧ存在

    validationSchema: props => {
        // https://github.com/jaredpalmer/formik/issues/145
        return validatePasswordYup.lazy(values => {
            let phoneReg = /((?=(09))[0-9]{10})$/g;
            switch(values.country){
                case "886":
                    phoneReg = /((?=(09))[0-9]{10})$/g;
                    break;
                case "86":
                    phoneReg  = /^(?=\d{11}$)^1(?:(?:3(?!49)[4-9\D]|47|5[012789]|78|8[23478]|98)\d{8}$|(?:70[356])\d{7}$)/g;
                    break;
                default:
                    phoneReg = /((?=(09))[0-9]{10})$/g;
                    break;

            }
            return validatePasswordYup.object().shape({
                country: validatePasswordYup
                    .string()
                    .notRequired(),
                phone: validatePasswordYup
                    .string()
                    .required('這是必填欄位!')
                    .matches(phoneReg, '電話格式有誤!'),
                name:  validatePasswordYup
                    .string()
                    .required('這是必填欄位!'),
                addressArea: validatePasswordYup
                    .string()
                    .notRequired(),
                addressDetail: validatePasswordYup
                    .string()
                    .when('addressArea', (addressArea, yup) => {
                        if (addressArea && addressArea !== '') {
                            return yup.required('請輸入地址!');
                        }
                        return yup;
                    }),
                password: validatePasswordYup
                    .string()
                    .min(6, '最少 6 位數')
                    .max(8, '最多 8 位數')
                    .required('這是必填欄位!'),
                confirmPassword: validatePasswordYup
                    .string()
                    .required('這是必填欄位!')
                    // 驗證型別後，若想驗證他的值可用 oneOf，會只限定裡面能裝的值
                    // https://github.com/jquense/yup/issues/72
                    .oneOf([values.password], '密碼需一致!'),
                email: validatePasswordYup
                    .string()
                    .required('這是必填欄位!')
                    .email(`Email 格式有誤!!`),
                otp: validatePasswordYup
                    // https://github.com/jquense/yup/issues/47#issuecomment-215588412
                    // .number()
                    // .typeError('請輸入 0-9 正整數 !')
                    // .integer('請輸入 0-9 正整數 !')
                    // .required('這是必填欄位!'),
                    // customer validate
                    .string()
                    .customPassword('必須為正整數'),
                nickName: validatePasswordYup
                    .string()
                    .required('這是必填欄位!'),
                agree: validatePasswordYup
                    .boolean()
                    .oneOf([true], '請勾選我同意!'),
            }) 
        })
    },
    // 若要 submit 時在 validate 則 onChange onBlur 驗證 option 要設成 false
    // validateOnChange: false,
    // validateOnBlur: false,
    displayName: 'ValidateRegisterForm',
})