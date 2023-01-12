const firebase from 'firebase/app';
const 'firebase/firestore';

const firestore = firebase.firestore();

//Collection yaratma
//firestore.collection('users')

//Collection icinde ki documentin id si ile get yapmak
//firestore.collection('users').doc('HPAhZzTyM6KqzCuvDvu7')

//Collection icinde ki documentin id si ile get yapmak
firestore.collection('users').doc('HPAhZzTyM6KqzCuvDvu7').collection('cardItems').doc('FVH7FRCtVBhNM0kHb45I');
//Farkli bir teknik Document leri yakalamak icin
firestore.doc('/users/HPAhZzTyM6KqzCuvDvu7/cardItems/FVH7FRCtVBhNM0kHb45I')
//Farkli bir teknik Collectionslari yakalamak icin
firestore.collection('/users/HPAhZzTyM6KqzCuvDvu7/cardItems')
