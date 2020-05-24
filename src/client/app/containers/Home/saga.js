import {
  call, put, takeLatest, all, take, cancelled
} from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';

function* fetchStations(action) {
  console.log('saga called=========');
}


export default function* homeSaga() {
  yield all([
    yield takeLatest('FETCH_STATIONS', fetchStations),
  ]);
}
