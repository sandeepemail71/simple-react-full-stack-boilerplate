/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import history from 'utils/history';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { theme } from 'components';
import Home from 'containers/Home';
import reducer from './reducer';
import saga from './saga';
import { makeSelectProps } from './selectors';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

function App(props) {
    return (
        <AppWrapper>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={
                                () => (
                                    <Home {...props} theme={theme} />
                                )
                            }
                            history={history}
                        />
                        <Route
                            path="/client"
                            render={
                                () => (
                                    <Home {...props} />
                                )
                            }
                        />
                    </Switch>
                </Router>
            </ThemeProvider>
        </AppWrapper>
    );
}

const mapStateToProps = createStructuredSelector({
    props: makeSelectProps
});

function mapDispatchToProps(dispatch) {
    return {
        triggerDispatch: () => dispatch()
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });
export default compose(
    withReducer,
    withSaga,
    withConnect
)(App);
