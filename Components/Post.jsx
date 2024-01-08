import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

const Post = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.main}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/121731399?s=400&u=c34d7d9dbece397ef8977c7eb1220d770e94c692&v=4",
            }}
            style={styles.postImage}
          />

          <Text style={styles.userName}>Aditya Shah</Text>
        </View>
        {/* Post Description */}
        <Text style={styles.postDescription}>
          🚀 Exciting Update: Check out my latest social media frontend created using React Native. 
          🌟 {"\n"} {"\n"} 🚀 Explore the sleek design and seamless user interface. Feel free to connect and share your thoughts! 📱
          <Text style={styles.hastag}> #ReactNative #SocialMedia #FrontendDevelopment</Text>
        </Text>

        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/D4D22AQGpdjv45CfSqw/feedshare-shrink_800/0/1704040796652?e=1707350400&v=beta&t=dEQoXmdh-R_fhRtPZ7LyWOtsDbUgcE1U74Fzu1ghr-Q",
          }}
          style={styles.postContentImage}
        />
        <View style={styles.buttons}>
        {/* <TouchableOpacity > */}
            <Ionicons name="heart-outline" size={24} color="black" />
            <Ionicons name="chatbubble-outline" size={24} color="black" />
            <Ionicons name="arrow-redo-outline" size={24} color="black" />
        {/* </TouchableOpacity> */}
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/121731399?s=400&u=c34d7d9dbece397ef8977c7eb1220d770e94c692&v=4",
            }}
            style={styles.postImage}
          />

          <Text style={styles.userName}>Aditya Shah</Text>
        </View>
        {/* Post Description */}
        <Text style={styles.postDescription}>
          🚀 Excited to share a milestone from my journey at SMART INDIA HACKATHON!  
          🌟 {"\n"} {"\n"}🚀 Our team, amidst stiff competition from students across the nation, was selected for the final event in Kolkata. Over an intense 36-hour hackathon, we passionately developed an innovative app connecting undertrial prisoners with lawyers. 📲⚖️ 📱
          <Text style={styles.hastag}> #ReactNative #SocialMedia #FrontendDevelopment</Text>
        </Text>

        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/D4D22AQGFg8oFKqHTFw/feedshare-shrink_800/0/1703361380168?e=1707350400&v=beta&t=r3YAzi2dz4U3IoeXUalFc-u114aqd1O_VEja86ZaDpY",
          }}
          style={styles.postContentImage}
        />
        <View style={styles.buttons}>
        {/* <TouchableOpacity > */}
            <Ionicons style={styles.buttonSize} size={24} name="heart-outline"  color="black" />
            <Ionicons name="chatbubble-outline" size={24} color="black" />
            <Ionicons name="arrow-redo-outline" size={24} color="black" />
        {/* </TouchableOpacity> */}
        </View>
      </View>

      

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: "#fff",
    padding: 15,
  },
  
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  postImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  hastag:{
    color:"#3b82f6" ,
  },
  buttons:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 20,
    marginRight: 20,
    marginTop: 10,
  },
  main:{
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    paddingBottom: 10,
    marginBottom: 20,
  },
  postDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  postContentImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default Post;
