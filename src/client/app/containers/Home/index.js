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
import reducer from './reducer';
import saga from './saga';

import { makeSelectProps } from './selectors';

import { Button } from 'components'

const HomeWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

function Home(props) {
	return (
		<HomeWrapper>
            <h1>Home component</h1>
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