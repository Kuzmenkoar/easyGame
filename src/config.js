import firebase from 'firebase'

export const appName = 'farebase-first-run'
export const firebaseConfig = {
  apiKey: 'AIzaSyDjA6CeIHuni5lNm4ML1b-TSxJltsYUO8g',
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: '536668972247',
}

firebase.initializeApp(firebaseConfig)
