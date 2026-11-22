import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

import Constants from "expo-constants"
const extra  = Constants.expoConfig?.extra

console.log(`extra constants : `, Constants.expoConfig?.extra)

let firebaseConfig = {}

if(extra){
    firebaseConfig = {
        apiKey: extra.firebaseApiKey,
        authDomain: extra.firebaseAuthDomain,
        projectId: extra.firebaseProjectId,
        storageBucket: extra.firebaseStorageBucket,
        messagingSenderId: extra.firebaseMessagingSenderId,
        appId: extra.firebaseAppId,
    };
}else{
    console.log(`No firebase config is available.`)
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)