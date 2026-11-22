import { createSlice } from "@reduxjs/toolkit";
import { addMarathons, fetchMarathons } from "./marathonThunk";
//install reduxjs/toolkit and dotenv
const initialState = {
    listOfMarathons: [],
    loading: false,
    successMessage: null,
    error: null
}
const marathonSlice = createSlice({
    name: 'marathon',
    initialState,
    reducers:{
                clearMessage: (state)=>{
                state.successMessage= null
                state.error=null
            }},
            extraReducers:(builder)=>{
                builder
            .addCase(fetchMarathons.pending, (state)=>{
                state.loading=true
                state.error=null
                state.successMessage=null
            })
            .addCase(fetchMarathons.rejected, (state, action)=>{
                state.loading=false
                state.error=action.payload || "Failed to fetch the marathons"
                state.successMessage=null
        })
         .addCase(fetchMarathons.fulfilled, (state, action)=>{
                state.listOfMarathons = action.payload
                state.loading=false
                state.error=null
                state.successMessage="Data was fecthed successfully"
        })
                    .addCase(addMarathons.pending, (state) => { 
                    state.loading = true
                    state.error = null
                    state.successMessage = null
                })
                .addCase(addMarathons.rejected, (state, action) => { 
                    state.loading = false
                    state.error = action.payload || "Unable to add the marathon"
                    state.successMessage = null
                })
                .addCase(addMarathons.fulfilled, (state, action) => { 
                    state.listOfMarathons.push(action.payload)
                    state.loading = false
                    state.error = null
                    state.successMessage = "New marathon added successfully"
                })
}
})
export const { clearMessage } = marathonSlice.actions;
export default marathonSlice.reducer;