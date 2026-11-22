import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import appStyles from "../SHARED/appStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMarathons } from "../redux/marathonThunk";
import { FlatList } from "react-native";
const ViewMarathonScreen = ({navigation}) =>{
    const dispatch = useDispatch();
    const {listOfMarathons, loading, error }= useSelector((state)=>state.marathons);

    useEffect(()=>{
            dispatch(fetchMarathons());
        },[]);
      if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

return(
        <SafeAreaView style={appStyles.safeArea}>
        <View style={appStyles.container}>
        <Text style={appStyles.headerStyle}>
          View marathons
        </Text>
        <TouchableOpacity
          style={appStyles.button}
          onPress={() => navigation.navigate("CreateMarathon")}
        >
          <Text style={appStyles.buttonText}>
            Create Marathon
          </Text>
        </TouchableOpacity>
        {loading && (
            <Text style={appStyles.summaryText}>
                loading
            </Text>
        )}
        {error && (
          <Text style={appStyles.summaryText}>
            {error}
          </Text>
        )}
        <FlatList
        data={listOfMarathons}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <View style={appStyles.taskItem}>
            <Text style={appStyles.taskText}>
            Marathons:{item.marathonName}
            </Text>
            <Text style={appStyles.buttonText}>
              Number of movies: {item.numberOfMovies}
            </Text>
            <Text style={appStyles.buttonText}>
              Average Duration: {item.averageMovieDuration}
            </Text>
            <Text style={appStyles.buttonText}>
              Break Time: {item.breakTime}
            </Text>
          </View>
        )}
        />
            
        </View>
        </SafeAreaView>
)
}
export default ViewMarathonScreen;

