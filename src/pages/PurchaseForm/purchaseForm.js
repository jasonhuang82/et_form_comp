import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// utils
import { withProps } from 'utils';
// pages
import Info from './Info/info';
import Confirm from './Confirm/confirm';
import Complete from './Complete/complete';
// style
import './style.scss';
export default class PurchaseForm extends Component {

    render() {
        const { match } = this.props;
        return (
            <div className="PurchaseForm w-80p h-80vh p-lg pos-ab-center bg-white">
                <Switch>
                    <Route
                        exact
                        path={`${match.path}`} 
                        component={withProps(Info, {
                            forwardUrl: `${match.path}/confirm`,
                        })}
                    />
                    <Route
                        path={`${match.path}/info`}
                        component={withProps(Info, {
                            forwardUrl: `${match.path}/confirm`,
                        })}
                    />
                    <Route
                        path={`${match.path}/confirm`}
                        component={withProps(Confirm, {
                            backUrl:  `${match.path}/info`,
                            forwardUrl: `${match.path}/complete`,
                        })}
                    />
                    <Route
                        path={`${match.path}/complete`}
                        component={withProps(Complete, {
                            backUrl:  `${match.path}/confirm`,
                        })}
                    />
                    <Route path="*" render={()=> <Redirect to={`${match.path}/info`}/>}/>
                </Switch>
            </div>
        )
    }
}
