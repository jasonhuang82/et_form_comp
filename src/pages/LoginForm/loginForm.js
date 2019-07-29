import React, { Component } from 'react';
import './style.scss';

import FormControl from 'components/FormControls/FormControl/formControl';
import Input from 'components/FormControls/Input/input';
import Select from 'components/FormControls/Select/select';
// formik
import validateRegisterForm from 'hoc/validateRegisterForm';

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.countryOptions = [
            {
                name: '中國 +86',
                value: '86',
            },
            {
                name: '香港 +852',
                value: '852',
            },
            {
                name: '澳門 +853',
                value: '853',
            },
            {
                name: '台灣 +886',
                value: '886',
            },
        ];
    }
    handleFormikInputChange = ({
        setFieldTouched = () => {},
        handleChange = () => {},
    }) => e => {
        const fieldName = e.target.name;
        setFieldTouched(fieldName, true, true);
        handleChange(e);
    }


    getErrorMessage = (fieldName) => {
        const {
            errors,
            touched,
        } = this.props;

        return errors[fieldName] && touched[fieldName] && errors[fieldName];
    }
    render() {
        const {
            values,
            errors,
            isValid,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            // https://github.com/jaredpalmer/formik/issues/114
            // touched 必須在 blur 時，才會判斷已 touch，但會有一開始 onInput 時就 trigger 的情況
            // 所以在 onChange 時就設定已 touch，讓 validation error message 能正常顯示
            // setFieldTouched('fieldName', isTouched, shouldValidate)
            setFieldTouched,
            /* and other goodies */
        } = this.props;

        console.log('error', errors);
        console.log('touch', touched);
        return (
        <div className="LoginForm w-80p h-80vh p-lg pos-ab-center bg-white">
            <form className="d-b">
                <div className="LoginForm-title">
                    歡迎註冊
                </div>

                {/* 手機 */}
                <FormControl label="您的手機號碼" errorMessage={this.getErrorMessage('phone')}>
                    <div className="form-control-combine">
                        <Select
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                            wrapClass="form-control-combine-select w-40p d-i-b vertical-align-top"
                            options={this.countryOptions}
                        />
                        <Input
                            name="phone"
                            type="text"
                            value={values.phone}
                            onChange={this.handleFormikInputChange({
                                setFieldTouched,
                                handleChange
                            })}
                            onBlur={handleBlur}
                            wrapClass="form-control-combine-input w-60p  d-i-b vertical-align-top"/>
                    </div>
                </FormControl>

                {/* 姓名 */}
                <FormControl label="會員姓名" errorMessage={this.getErrorMessage('name')}>
                    <Input
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={this.handleFormikInputChange({
                            setFieldTouched,
                            handleChange
                        })}
                        onBlur={handleBlur}
                        placeholder="請輸入真實中文姓名"
                    />
                </FormControl>

                {/* 密碼 */}

                <FormControl label="密碼" errorMessage={this.getErrorMessage('password')}>
                    <Input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={this.handleFormikInputChange({
                            setFieldTouched,
                            handleChange
                        })}
                        onBlur={handleBlur}
                        placeholder="請輸入密碼"
                    />
                </FormControl>
                {/* 確認密碼 */}

                <FormControl label="確認密碼" errorMessage={this.getErrorMessage('confirmPassword')}>
                    <Input
                        name="confirmPassword"
                        type="password"
                        value={values.confirmPassword}
                        onChange={this.handleFormikInputChange({
                            setFieldTouched,
                            handleChange
                        })}
                        onBlur={handleBlur}
                        placeholder="請輸入密碼"
                    />
                </FormControl>
                {/* Email */}

                <FormControl label="Email" errorMessage={this.getErrorMessage('email')}>
                    <Input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={this.handleFormikInputChange({
                            setFieldTouched,
                            handleChange
                        })}
                        onBlur={handleBlur}
                        placeholder="請輸入 Email"
                    />
                </FormControl>
                {/* 手機驗證碼 */}
                <FormControl label="手機驗證碼" errorMessage={this.getErrorMessage('otp')}>
                    <Input
                        name="otp"
                        type="number"
                        value={values.otp}
                        onChange={this.handleFormikInputChange({
                            setFieldTouched,
                            handleChange
                        })}
                        onBlur={handleBlur}
                        placeholder="請輸入驗證碼"
                        style={{
                            paddingRight: '32%',
                        }}
                        appendElementRender={() => {
                            return (
                                <button
                                    className="LoginForm-phone-btn btn d-i-b w-30p pos-ab t-50p r-5 translate-y-50p"
                                >
                                    取得手機驗證碼
                                </button>
                            );
                        }}
                    />
                </FormControl>
                {/* Submit */}
                <button
                    className="LoginForm-submit btn btn-submit m-b-sm btn-border"
                    disabled={!isValid}
                >
                    確定註冊
                </button>
                {/* Agree */}
                <div className="fz-sm">
                    <label>
                        <input type="checkbox" className="d-i-b vertical-align-middle"/>
                        <span>我願意接收最新優惠通知</span>
                        <a className="n-blue--link" href="/HelpCenter/MarketInfo" title="行銷資訊發送" target="_blank">&lt;行銷資訊發送&gt;</a>
                    </label>
                </div>
                
            </form>
        </div>
        )
    }
}


export default validateRegisterForm(LoginForm);