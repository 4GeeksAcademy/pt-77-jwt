// Fetches the agenda from the API
export const signup = async (dispatch, payload) => {
  console.log(payload, payload.email, payload.password);
  let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/signup", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
    }),
  });
  let data = await response.json();

  // error handling
  // if (data.detail == `Agenda "valerieclaire96" doesn't exist.`) {
  //     createAgenda(); // Call function to create agenda
  // }
};
export const login = async (dispatch, payload) => {
  let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
    }),
  });
  let data = await response.json();

  // error handling
  // if (data.detail == `Agenda "valerieclaire96" doesn't exist.`) {
  //     createAgenda(); // Call function to create agenda
  // }

  // // Dispatch the agenda data to the global state
  // dispatch({
  //   type: "set_user",
  //   payload: { user: data.user, access_token: data.access_token },
  // });
};
// export const private = async (dispatch, payload) => {
//     // let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96");
//     // let data = await response.json();

//     // error handling
//     // if (data.detail == `Agenda "valerieclaire96" doesn't exist.`) {
//     //     createAgenda(); // Call function to create agenda
//     // }

//     // Dispatch the agenda data to the global state
//     dispatch({
//         type: "set_agenda",
//         payload: { agenda: data.slug, contacts: data.contacts },
//     });
// }
