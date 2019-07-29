import React, { PureComponent } from 'react'
import cx from 'classnames';
import './style.scss';
export default class Input extends PureComponent {
    static defaultProps = {
        type: 'text',
        value: '',
        onChange(){},
        placeholder: '',
        appendElementRender: null,
    };

    renderAppendElement = () => {
        const { appendElementRender } = this.props;
        if (!appendElementRender) return null;
        return appendElementRender();
    }
    
    render() {
        const {
            wrapClass,
            appendElement,
            appendElementRender,
            ...inputProps
        } = this.props;
        return (
            <div className={cx("form-control-input", wrapClass)}>
                <input {...inputProps} />
                { this.renderAppendElement() }
            </div>
        )
    }
}
