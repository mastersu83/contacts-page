import axios from "axios";

const getContactsAction = (contacts) => ({
  type: "GET_CONTACTS",
  payload: contacts,
});

export const getContactsThunk = (accessToken) => async (dispatch) => {
  await axios
    .get(`http://localhost:8000/contacts`, {
      headers: {
        Authorization: accessToken,
      },
    })
    .then((res) => {
      dispatch(getContactsAction(res.data));
    });
};
