import React, { Component } from 'react';
import './style.scss';

export default class LoginForm extends Component {
    render() {
        return (
        <div className="LoginForm w-80p h-80vh p-lg pos-ab-center bg-white">
            <form className="d-b">
                <div className="LoginForm-title">
                    歡迎註冊
                </div>

                {/* 手機 */}
                <div className="form-control">
                    <label htmlFor="">您的手機號碼</label>
                    <div className="form-control-combine">
                        <div className="form-control-combine-select w-40p">
                            <select>
                                <option value="86">中國 +86</option>
                                <option value="852">香港 +852</option>
                                <option value="853">澳門 +853</option>
                                <option value="886">台灣 +886</option>
                            </select>
                        </div>
                        <div className="form-control-combine-input form-control-input w-60p">
                            <input
                                type="text"
                                // value="0"
                                onChange={() => {}}
                                placeholder="請輸入您的手機號碼"
                            />
                        </div>
                    </div>
                </div>

                {/* 姓名 */}
                <div className="form-control">
                    <label htmlFor="">會員姓名</label>
                    <div className="form-control-input">
                        <input
                            type="text"
                            // value="0"
                            onChange={() => {}}
                            placeholder="請輸入真實中文姓名"
                        />
                    </div>
                </div>

                {/* 密碼 */}

                {/* 確認密碼 */}

                {/* Email */}

                {/* 手機驗證碼 */}
                <div className="form-control">
                    <label htmlFor="">手機驗證碼</label>
                    <div className="form-control-input">
                        <input
                            type="text"
                            // value="0"
                            onChange={() => {}}
                            placeholder="請輸入真實中文姓名"
                        />
                        <button className="LoginForm-phone-btn btn d-i-b w-30p pos-ab t-50p r-5 translate-y-50p">
                            取得手機驗證碼
                        </button>
                    </div>
                </div>
                {/* Submit */}
                <button
                    className="LoginForm-submit btn-disable btn btn-submit m-b-sm btn-border"
                    disabled
                >
                    確定註冊
                </button>
                {/* Agree */}
                <div className="form-control">
                    <label>
                        <input type="checkbox"/>
                        <span>我願意接收最新優惠通知</span>
                        <a className="n-blue--link" href="/HelpCenter/MarketInfo" title="行銷資訊發送" target="_blank">&lt;行銷資訊發送&gt;</a>
                    </label>
                </div>
                
            </form>
        </div>
        )
    }
}
