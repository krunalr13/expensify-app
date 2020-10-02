import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default};

  // database.ref('expenses')
  // .on('value', (snapshot) => {
  //   const expenses = [];
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id : childSnapshot.key,
  //       ...childSnapshot.val()  
  //     });
  //   });
  //   console.log(expenses);
  // });

  // database.ref('expenses').push({
  //   description : 'rent',
  //   note : '',
  //   amount : 3000,
  //   createdAt : 545454
  // });

  // database.ref('expenses').push({
  //   description : 'mess',
  //   note : '',
  //   amount : 1800,
  //   createdAt : 545454
  // });

  // database.ref('expenses').push({
  //   description : 'chai',
  //   note : '',
  //   amount : 150,
  //   createdAt : 545454
  // });

  // database.ref().set({
  //     name: 'Krunal R',
  //     age: 23,
  //     stressLevel : 6,
  //     job : {
  //       title : 'Software Developer',
  //       company : 'Google'
  //     },
  //     location : {
  //       city: 'Pune',
  //       country: 'India'  
  //     },
  //     isSingle : true
  // }).then(() => {
  //    console.log('Data is saved');
  // }).catch((e) => {
  //   console.log('This failed', e);
  // });

  // database.ref().update({
  //     stressLevel : 9,
  //     'job/company' : 'Amazon',
  //     'location/city': 'New York'
  // });

  // database.ref('location')
  // .once('value')
  // .then((snapshot) => {
  //   const val = snapshot.val();
  //   console.log(val);
  // })
  // .catch((e) => {
  //    console.log('Error', e);
  // });

  // const onValueChange = database.ref().on('value', (snapshot) => {
  //    console.log(snapshot.val());
  // });

  // setTimeout(() => {
  //   database.ref('age').set(23);
  // },4000 );

  // setTimeout(() => {
  //   database.ref('age').set(24);
  // },8000 );

  // setTimeout(() => {
  //   database.ref().off(onValueChange);
  // },12000 );


  // setTimeout(() => {
  //   database.ref('age').set(25);
  // },16000 );
