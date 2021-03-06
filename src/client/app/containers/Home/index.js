/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { Button } from 'components';
import reducer from './reducer';
import saga from './saga';

import { makeSelectProps } from './selectors';


const HomeWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const Building = styled.div`
    border: solid 2px;
    height: 100px;
    width: 400px;
`;

function Home(props) {
    return (
        <HomeWrapper>
            <Building />
            <Button>Submit</Button>
        </HomeWrapper>
    );
}

const mapStateToProps = createStructuredSelector({
    props: makeSelectProps
});

function mapDispatchToProps(dispatch) {
    return {
        triggerDispatch: () => dispatch(),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });
export default compose(
    withReducer,
    withSaga,
    withConnect
)(Home);