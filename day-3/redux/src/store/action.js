export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PHONE = 'SET_PHONE';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const SET_DISABLED = 'SET_DISABLED';
export const RESET = 'RESET';

export function submitForm() {
  return (dispatch, getState) => {
    console.log({ ...getState() });

    setTimeout(() => {
      dispatch({ type: RESET });
    }, 3000);
  };
}
