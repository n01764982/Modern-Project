import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import {useDispatch} from 'react-redux';
import { addMarathons } from "../redux/marathonThunk";    
import appStyles from "../SHARED/appStyles";

export const CreateMarathonScreen=()=>{
    const dispatch = useDispatch();
    const [marathonName, setMarathonName]=useState("");
    const [numberOfMovies, setNumberOfMovies]=useState("");
    const [averageMovieDuration, setAverageMovieDuration]=useState("");
    const [breakTime, setBreakTime]=useState("");
    const saveMarathon =()=>{
        dispatch(
        addMarathons({
        marathonName,
        numberOfMovies,
        averageMovieDuration,
        breakTime
      })
    );
    setMarathonName("");
    setNumberOfMovies("");
    setAverageMovieDuration("");
    setBreakTime("");
    };
    return (
        <View style={appStyles.container}>
            <Text style={appStyles.headerStyle}>
            Create Marathon
            </Text>
            <TextInput 
            placeholder="Marathon Name"
            style={appStyles.input}
            value={marathonName}
            onChangeText={setMarathonName}
            />
            <TextInput
            placeholder="Number of movies"
            style={appStyles.input}
            keyboardType="number"
            value={numberOfMovies}
            onChangeText={setNumberOfMovies}
            />
            <TextInput 
            placeholder="Average Duration"
            keyboardType="numberic"
            style={appStyles.input}
            value={averageMovieDuration}
            onChangeText={setAverageMovieDuration}
            />
            <TextInput 
            placeholder="Break Time"
            keyboardType="numberic"
            style={appStyles.input}
            value={breakTime}
            onChangeText={setBreakTime}
            />
            <TouchableOpacity onPress={saveMarathon}
            style={appStyles.button}
            >
            <Text style={appStyles.buttonText}>Save Marathon</Text>
            </TouchableOpacity>
        </View>
    )
}
