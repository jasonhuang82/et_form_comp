/* @flow */
import ReactDOM from 'react-dom';
import React, { PureComponent } from 'react';
import cx from 'classnames';
import './style.scss';

type Props = {
    closeModal: Function,
    openModal: Function,
    isOpen: boolean,
    className: string,
    children: any,
};

export default class Modal extends PureComponent<Props> {
    static defalutProps = {
        closeModal(){},
        openModal(){},
        isOpen: false,
        className: '',
        children: null,
    };

    // getNumber = (nums: number[]): string => {
    //     const readonlyArray: $ReadOnlyArray<number> = [1, 2, 3]

    //     const first = readonlyArray[0] // OK to read
    //     readonlyArray[1] = 20          // Error!
    //     readonlyArray.push(4)          // Error!
    //     return nums.join('-')
    // }

    renderModal = () => {
        const { children, closeModal, isOpen, className } = this.props;
        return (
            <div
                className={cx("Modal", className, {
                    ModalIsOpen: isOpen,
                })}
            >
                <div className="Modal-body">
                    <div className="Modal-close"  onClick={closeModal}>&times;</div>
                    {children}
                </div>
                <div className="Modal-dropBack" onClick={closeModal}/>
            </div>
        );
    }
    render() {
        const $body = document.querySelector('body');
        if (!$body) {
            return this.renderModal();
        }
        return ReactDOM.createPortal(
            this.renderModal(),
            $body
        )
    }
}
