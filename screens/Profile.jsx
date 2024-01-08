import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';

const Profile = () => {
  const navigation = useNavigation();
  const handleReset = async() => {
      
     await removeItem('onboarded');
     navigation.navigate('Onboarding');
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/D4D35AQHgItE4pdilzQ/profile-framedphoto-shrink_100_100/0/1687620419026?e=1705338000&v=beta&t=_T9VmNJ1Cv2ndkVdfw-eAV_--E6OKWSjYyhtcatWybA' }} // Replace with your profile image URL
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Aditya Shah</Text>
      {/* <Text style={styles.userDescription}>Frontend Developer</Text> */}
      <Text style={styles.userDescription}>As an engineering IT student, I possess a strong foundation in programming languages such as java, python, html
,css , etc. My knowledge of data structures, algorithms, and software design principles has enabled me to develop
efficient and scalable solutions to complex problems.. </Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Update/Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset} style={styles.button}>
                <Text>Reset Onboarding</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    padding: 20,
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#3b82f6',
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button:{
    backgroundColor:'#a7f3d0',
    padding:10,
    borderRadius:10,
    marginTop:20
},
});

export default Profile;
