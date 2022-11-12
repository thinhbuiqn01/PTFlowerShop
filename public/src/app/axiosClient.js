import axios from "axios";
import firebase from "firebase";
const axiosClient = axios.create({
  baseURL: "",
  headers: {
    "content-type": "application/json",
  },
});

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    return currentUser.getIdToken();
  }

  const hasRememberedAccount = localStorage.getItem(
    "firebase:authUser:AIzaSyBdms9-FMBeViv6YE05IdY8-TWpdxPmoMU:[DEFAULT]"
  );
  if (!hasRememberedAccount) return null;

  return new Promise((resolve, reject) => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        console.log(user);
        if (!user) {
          console.log("user is not login");
          return;
        }
        console.log(("Logged in user:", user.displayName));
        const token = await user.getIdToken();
        console.log(("Logged in user token:", token));
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  });
};

axiosClient.intercept.request.use(async (config) => {
  const token = await getFirebaseToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
});
