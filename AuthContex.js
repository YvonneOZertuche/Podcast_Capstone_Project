import { LOGOUT } from './src/actions/actionTypes.js'

const logoutUserAction = () => {
  dispatchEvent({
    type: LOGOUT,
    payload: null
  })
}
