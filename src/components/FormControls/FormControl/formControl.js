import React, { PureComponent } from 'react'
import './style.scss';
export default class FormControl extends PureComponent {
    static defaultProps = {
        label: '',
        errorMessage: '',
    };

    renderError = () => {
        const { errorMessage } = this.props;
        if (!errorMessage) return null;
        return <div className="form-control-error">{errorMessage}</div>;
    }
    render() {
        const {
            children,
            label,
        } = this.props;
        return (
            <div className="form-control">
                <label htmlFor="">{label}</label>
                <div>
                    { children }
                    { this.renderError() }
                </div>
            </div>
        )
    }
}
