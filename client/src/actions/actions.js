import './actionTypes';
import axios from 'axios';
import { actionTypes } from './actionTypes';

export const addToFollowing = podcastObj => {
  console.log(podcastObj)
  return {
    type: 'ADD_TO_FOLLOWING',
    data: podcastObj
  }
}

export const UpdateListened = newPodcast => {
  return {
    type: "EDIT_UPDATE",
    data: newPodcast
  }
}
  
export const register = (formData, cb) => async dispatch => {
  try {
    //api call to our backend
    let response = await axios.post('https://nameless-scrubland-78350.herokuapp.com/api/v1/users/register', formData)
    let jwt = response.data.token 
    console.log("data retrieved from the server")
    
    //take response from api call, store token in global storage
    dispatch({
      type: actionTypes.LOAD_USER_TOKEN,
      data: jwt
    })

    //store token in local storage
    localStorage.setItem('token', jwt)

    cb()
  } catch (err) {
    dispatch({
      type: actionTypes.ERROR,
      data: err
    })
  }
}

export const login = (formData, cb) => async dispatch =>{
  try {
    //make an api call to /login
    let response = await axios.post('https://nameless-scrubland-78350.herokuapp.com/api/v1/users/login', formData)
    let token = response.data.token

    //dispatch action
    dispatch({
      type: actionTypes.LOAD_USER_TOKEN,
      data: token
    })

    localStorage.setItem('token', token)

    cb()

  } catch (err) {
    dispatch({
      type: actionTypes.ERROR,
      data: err
    })
  }
}

export const logout = (cb) => dispatch => {
  dispatch({
    type: actionTypes.LOAD_USER_TOKEN,
    data: ""
  })

  //clear local storage
  localStorage.removeItem('token')

  cb()
}
