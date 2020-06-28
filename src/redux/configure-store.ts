import { createStore, applyMiddleware, AnyAction } from 'redux';
import ReduxThunk, { ThunkDispatch } from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './index';

export type Dispatch = ThunkDispatch<{}, {}, AnyAction>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const configureStore = (state?: any) => {
  const store = createStore(
    rootReducer,
    state,
    composeWithDevTools(applyMiddleware(ReduxThunk, ReduxPromise)),
  );

  return {
    store,
  };
};
