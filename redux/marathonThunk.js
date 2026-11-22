import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, addDoc, updateDoc, deleteDoc, doc, docRef, collection} from "firebase/firestore";
import { db } from "../config/firebase.config";

const COLLECTION_REF= collection(db, "marathons")

export const fetchMarathons = createAsyncThunk(
    "marathons/fetchMarathons",
    async (_, thunkAPI) => {
        try {
          const snapshot = await getDocs(COLLECTION_REF)
    
          if (snapshot){
            console.log(`${snapshot.docs.length} records fetched from db`)
    
            const marathonList = snapshot.docs.map( (doc) => ({
              id : doc.id, 
              ...doc.data() 
            })
            )
            return marathonList
          }else{
            console.log(`no data received from db`)
            return thunkAPI.rejectWithValue(`no data received from db`)
          }
          
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      },
    );
export const addMarathons = createAsyncThunk(
    "marathons/addMarathons",
    async (marathon, thunkAPI) => {
        try{
          console.log(marathon);
        const docRef = await addDoc(COLLECTION_REF, marathon)
                  console.log(marathon);

            return{
                id:docRef.id,
                ...marathon
            }
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
)
    