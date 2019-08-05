import React, { PureComponent } from 'react'
import './style.scss'

import Input from 'components/FormControls/Input/input';
export default class Info extends PureComponent {

    handleNextStep = (e) => {
        e.preventDefault()
        const {
            forwardUrl,
            history,
        } = this.props;
        history.push(forwardUrl);
    }
    render() {
        return (
        <div>
            <form className="d-b" onSubmit={this.handleNextStep}>
                <div className="row m-b-sm">
                    <div className="col-3 m-t-xs fz-md">
                        <label>轉入手機</label>
                    </div>
                    <div className="col-9">
                        <Input />
                        <div className="PurchaseForm-errorMessage m-t-xs fz-sm color-primary">
                            您輸入的帳戶有誤
                        </div>
                    </div>
                </div>

                

                <button
                    className="PurchaseForm-submit btn btn-primary m-t-sm"
                    // disabled
                    // onClick={this.handleNextStep}
                >
                    下一步
                </button>
            </form>
        </div>
        )
    }
}
