import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
    paddingTop: 60,
  },
  headerStyle: {
    width: "100%",
    padding: 10,
    backgroundColor: "#2196F3",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom:20
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  searchInput: {
    fontSize: 16,
  },
  taskItem: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 10,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
  },
  taskCompleted: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "gray",
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#4CAF50",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    paddingTop:10
  },
  summaryText: {
    fontSize: 18,
    marginVertical: 8,
    textAlign: "center",
    
  },
});

export default appStyles;
