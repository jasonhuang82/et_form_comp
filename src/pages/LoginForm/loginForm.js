import React, { Component } from 'react';
import './style.scss';

import FormControl from 'components/FormControls/FormControl/formControl';
import Input from 'components/FormControls/Input/input';
import Select from 'components/FormControls/Select/select';

export default class LoginForm extends Component {
    render() {
        return (
        <div className="LoginForm w-80p h-80vh p-lg pos-ab-center bg-white">
            <form className="d-b">
                <div className="LoginForm-title">
                    歡迎註冊
                </div>

                {/* 手機 */}
                <FormControl label="您的手機號碼" errorMessage="最少 9 個字">
                    <div className="form-control-combine">
                        <Select
                            wrapClass="form-control-combine-select w-40p d-i-b vertical-align-top"
                            options={[
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
                            ]}
                        />
                        <Input wrapClass="form-control-combine-input w-60p  d-i-b vertical-align-top"/>
                    </div>
                </FormControl>

                {/* 姓名 */}
                <FormControl label="會員姓名" errorMessage="">
                    <Input
                        type="text"
                        onChange={() => {}}
                        placeholder="請輸入真實中文姓名"
                    />
                </FormControl>

                {/* 密碼 */}

                <FormControl label="密碼" errorMessage="">
                    <Input
                        type="password"
                        onChange={() => {}}
                        placeholder="請輸入密碼"
                    />
                </FormControl>
                {/* 確認密碼 */}

                <FormControl label="確認密碼" errorMessage="">
                    <Input
                        type="password"
                        onChange={() => {}}
                        placeholder="請輸入密碼"
                    />
                </FormControl>
                {/* Email */}

                <FormControl label="Email" errorMessage="">
                    <Input
                        type="email"
                        onChange={() => {}}
                        placeholder="請輸入 Email"
                    />
                </FormControl>
                {/* 手機驗證碼 */}
                <FormControl label="手機驗證碼" errorMessage="">
                    <Input
                        type="email"
                        onChange={() => {}}
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
                    disabled
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
