import React from "react";

import emailApi from "src/api/email";
import { FETCH_STATUS } from "src/helpers/api";

export const appDefaultState = {
  sendEmailState: {
    fetchStatus: FETCH_STATUS.IDLE,
    data: {},
    error: "",
  },
};

export const initAppActions = (state) => {
  const [appState, setAppState] = state;

  const sendEmail = (payload) => {
    setAppState({
      ...appState,
      sendEmailState: {
        ...appState.sendEmailState,
        fetchStatus: FETCH_STATUS.LOADING,
        data: {},
        error: "",
      },
    });

    emailApi
      .send(payload)
      .then((response) => {
        if (response.statusCode !== 200) {
          setAppState({
            ...appState,
            sendEmailState: {
              ...appState.sendEmailState,
              fetchStatus: FETCH_STATUS.FAILED,
              error: "Failed to dispatch email. Please try again later!",
            },
          });
          return;
        }

        setAppState({
          ...appState,
          sendEmailState: {
            ...appState.sendEmailState,
            fetchStatus: FETCH_STATUS.SUCCESS,
            data: response.data,
          },
        });
      })
      .catch(() => {
        setAppState({
          ...appState,
          sendEmailState: {
            ...appState.sendEmailState,
            fetchStatus: FETCH_STATUS.FAILED,
            error: "Failed to dispatch email. Please try again later!",
          },
        });
      });
  };

  const resetSendEmailState = () =>
    setAppState({
      ...appState,
      sendEmailState: appDefaultState.sendEmailState,
    });

  return {
    sendEmail,
    resetSendEmailState,
  };
};

const AppContext = React.createContext(appDefaultState);

export const useAppContext = () => React.useContext(AppContext);

export default AppContext;
