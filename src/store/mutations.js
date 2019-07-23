/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
export default {
  changeCity(state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {} 
}
}