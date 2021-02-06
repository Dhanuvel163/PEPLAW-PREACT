// firebase.utils.js
import firebase from 'firebase/app';
import 'firebase/auth';
const app = firebase.initializeApp(JSON.parse(process.env.REACT_APP_SECRET_CODE));
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const Fbprovider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export{auth,provider,Fbprovider}
export default app