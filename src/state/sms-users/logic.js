import { createLogic } from "redux-logic"

import { 
  REQUEST_TOTAL_USERS,
  RECEIVE_TOTAL_USERS,
  REQUEST_FAILED,
} from "./constants";

const requestAllSmsUsersLogic = createLogic({
    process({firebasedb}) {
      return firebasedb.ref('sms-users/all-users').once('value')
        .then( (snapshot) => {
          return snapshot.numChildren();
        })
    },
    processOptions: {
      failType: REQUEST_FAILED,
      successType: RECEIVE_TOTAL_USERS,
    },
  type: REQUEST_TOTAL_USERS,
});

const requestAllSmsUsersStateDataLogic = createLogic({
    process({firebasedb}) {
      console.log(`🍎`);
      // return firebasedb.ref('sms-users').once('value')
      //   .then( (snapshot) => {

      //     // snapshot.forEach(function(childSnapshot) {
      //     //   // key will be "ada" the first time and "alan" the second time
      //     //   var key = childSnapshot.key;
      //     //   // childData will be the actual contents of the child
      //     //   var childData = childSnapshot.val();
      //     // });

      //     // return snapshot.numChildren();
      //     // let fakeResult = {
      //     //   wa: 22,
      //     //   id: 85,
      //     // }

      //     let fakeResult = 5;
      //     return fakeResult;
      //   })
      return 5;
    },
    processOptions: {
      failType: REQUEST_FAILED,
      successType: RECEIVE_TOTAL_USERS,
    },
  type: REQUEST_TOTAL_USERS,
});


export default [
  requestAllSmsUsersLogic,
  requestAllSmsUsersStateDataLogic,
];