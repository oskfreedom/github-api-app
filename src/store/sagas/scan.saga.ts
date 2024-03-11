import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { AppActions } from "store";
import { IRepo, ResponseGenerator } from "types";
import api from "utils/api";

type IUser = {
  login: string;
};
export function* getUserSaga(actions: PayloadAction<string>) {
  try {
    yield put(AppActions.load.beginLoad());
    const result: ResponseGenerator = yield call(
      async () => await api().get(`search/users?q=${actions.payload}`)
    );
    if (result.data) {
      yield put(
        AppActions.scan.getUser([
          ...result.data.items.map((user: IUser) => user.login),
        ])
      );
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(AppActions.load.finishLoad());
  }
}

export function* getRepoSaga(actions: PayloadAction<string>) {
  try {
    yield put(AppActions.load.beginLoad());
    const result: ResponseGenerator = yield call(
      async () => await api().get(`users/${actions.payload}/repos`)
    );
    if (result.data) {
      yield put(
        AppActions.scan.getRepo([
          ...result.data.map((repo: IRepo) => {
            return {
              name: repo.name,
              description: repo.description,
              stargazers_count: repo.stargazers_count,
            };
          }),
        ])
      );
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(AppActions.load.finishLoad());
  }
}

function* repoSaga() {
  yield takeLatest(AppActions.scan.getUserRequest.type, getUserSaga);
  yield takeLatest(AppActions.scan.getRepoRequest.type, getRepoSaga);
}

export default repoSaga;
