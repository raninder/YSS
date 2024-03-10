import { Animated, StyleSheet, Text, View, Image, Button,TouchableOpacity, Alert } from 'react-native';
// import Modal from "react-native-modal";
// import {useState} from 'react'

const Tour = () => {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const handleModal = () => setIsModalVisible(() => !isModalVisible);
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Testing Alert",
      "You are a amazing developer",
      [
        {
          text: "Yeah",
          onPress: () => console.log("Yeah Pressed"),
          style: "cancel"
        },
        { text: "Nope", onPress: () => console.log("Nope Pressed") }
      ],
      { cancelable: false }
    );
  return(
<View style={styles.container}>
  <View style={styles.block1}>
      <View style={styles.tour}>
        <Text style={styles.textTour}>
          Tour
        </Text>
      </View>
      <View style= {styles.questions}>
      <TouchableOpacity
        style={styles.button}
        // onPress={"onPress"}
        // onPress={handleModal}
        onPress={createTwoButtonAlert} 
      >
        <Text style={styles.quesStyle}>Question1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={"onPress"}
      >
        <Text style={styles.quesStyle}>Question2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={"onPress"}
      >
        <Text style={styles.quesStyle}>Question3</Text>
      </TouchableOpacity>
      </View>
    </View>
      <View style= {styles.options}>
      <TouchableOpacity
        style={styles.optionBtn}
        onPress={"onPress"}
      >
        <Text style={styles.optionTextStyle}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionBtn}
        onPress={"onPress"}
      >
        <Text style={styles.optionTextStyle}>View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionBtn}
        onPress={"onPress"}
      >
        <Text style={styles.optionTextStyle}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionBtn}
        onPress={"onPress"}
      >
        <Text style={styles.optionTextStyle}>Settings</Text>
      </TouchableOpacity>
      </View>
      <View style= {styles.chat}>
      <TouchableOpacity
        style={styles.chatBtn}
        onPress={()=>{}}
      >
        <Text style={styles.optionTextStyle}>Chat</Text>
      </TouchableOpacity>
       </View>
       {/* <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={handleModal} />
        </View>
      </Modal> */}
</View>
)}
export default Tour

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    },
    block1:{
      flexDirection:'row'
    },
  tour:{
    height:160,
    width:160,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    margin:10
  },
  textTour: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
    color:'white'
  },
  questions:{
    marginLeft:10
  },
  button:{
    alignItems: "center",
    backgroundColor: "#7A4F50",
    padding: 10,
    width:160,
    margin:10
  },
  quesStyle:{
    color:'white'
  },
  options:{
    margin:20,
    },
  optionBtn:{
    alignItems: "center",
    backgroundColor: "green",
    padding: 15,
    width:300,
    margin:10,
    borderRadius:10
  },
  optionTextStyle:{
    color:'white',
    fontSize: 24,
    fontFamily:'Arial'
  },
  chat:{
    position: 'absolute', 
    bottom: 10,
    right: 10,
    padding:20,
    justifyContent:'flex-end',
    alignItems:'flex-end'
   },
   chatBtn:{
    backgroundColor:'gray',
    alignItems: 'center',
    justifyContent:'center',
    height:60,
    width:80,
    borderRadius:8
   }

})