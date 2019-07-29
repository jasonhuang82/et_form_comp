
import React, { PureComponent } from 'react'
import cx from 'classnames';
import './style.scss';
export default class Select extends PureComponent {
    static defaultProps = {
        value: '',
        onChange(){},
        options: [
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
        ],
    };
    
    renderOptions = () => {
        const { options } = this.props;
        if(options.length <= 0){
            return null;
        }

        return options.map(option => (
            <option
                key={option.value}
                value={option.value}
            >
                {option.name}
            </option>
        ));
    }

    render() {
        const {
            wrapClass,
            options,
            ...selectProps
        } = this.props;
        return (
            <div className={cx("form-control-select", wrapClass)}>
                <select {...selectProps}>
                    { this.renderOptions() }
                </select>
            </div>
        )
    }
}