import {all, fork} from 'redux-saga/effects';



export default function* rootSaga(){
    yield all([
        // fork(appSaga),
        // fork(userSage),
        // fork(flowersSaga),
        // fork(sightingSaga),
    ])
}