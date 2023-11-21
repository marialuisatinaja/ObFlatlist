import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { Guest } from "./src/Data";
import { FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.content}>
        <FlatList
          data={Guest}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={styles.initial}>
                <Text style={styles.initialText}>
                  {item.name.lname.charAt(0).toUpperCase()}
                  {item.name.fname.charAt(1).toUpperCase()}
                </Text>
              </View>
              <View style={styles.details}>
                <Text style={styles.thename}>
                  {item.name.lname}, {item.name.fname}
                  {item.name.mname ? `, ${item.name.mname}.` : ""}
                </Text>
                <Text style={styles.address}>{item.address}</Text>
              </View>
              <Icon name="dots-three-horizontal" size={35} color="black" />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },

  content: {
    justifyContent: "flex-end",
  },
  thename: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  address: {
    color: "black",
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  initial: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#329ad4",
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  initialText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
});