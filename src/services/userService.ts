import fireBase from "../constants/configFireBase";
export const getUserAPI = (user: any) => {
  return fireBase.auth().signInWithEmailAndPassword(user.email, user.password);
};
export const postUserAPI = (user: any) => {
  return fireBase.auth().createUserWithEmailAndPassword(user.email, user.password);
};
export const setToken = (token: any) => {
  localStorage.setItem("token", token);
};

export const removeToken = async () => {
  await localStorage.removeItem('token')
}
