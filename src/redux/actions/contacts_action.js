import axios from "axios";

const getContactsAction = (contacts) => ({
  type: "GET_CONTACTS",
  payload: contacts,
});
// const addContactAction = (name, phone) => ({
//   type: "ADD_CONTACT",
//   payload: {
//     name,
//     phone,
//   },
// });

export const addContactThunk =
  (name, phone, accessToken) => async (dispatch) => {
    await axios.post(
      "http://localhost:8000/contacts",
      { name, phone },
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
    dispatch(getContactsThunk(accessToken));
  };
export const editContactThunk =
  (name, phone, accessToken, id) => async (dispatch) => {
    await axios.put(
      `http://localhost:8000/contacts/` + id,
      { name: name, phone: phone },
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
    dispatch(getContactsThunk(accessToken));
  };
export const removeContactThunk = (id, accessToken) => async (dispatch) => {
  await axios.delete(`http://localhost:8000/contacts/` + id, {
    headers: {
      Authorization: accessToken,
    },
  });
  dispatch(getContactsThunk(accessToken));
};

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
