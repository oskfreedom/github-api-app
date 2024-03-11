import { all, fork } from "redux-saga/effects";
import repoSaga from "./scan.saga";

export function* appSaga() {
  yield all([fork(repoSaga)]);
}
