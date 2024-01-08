import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

const Post = () => {
  const [postText, setPostText] = useState('');
  const [attachedImages, setAttachedImages] = useState([]);

  const handleAttachImage = () => {
    // Handle image attachment logic here (e.g., using ImagePicker or any other library)
    // For demonstration, let's assume you have an array of image URLs
    const newImage = 'https://example.com/image.jpg';
    setAttachedImages([...attachedImages, newImage]);
  };

  const handlePost = () => {
    // Handle post submission logic here
    console.log('Post Text:', postText);
    console.log('Attached Images:', attachedImages);
    // Reset the input and attached images after posting
    setPostText('');
    setAttachedImages([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Hello I am aditya Shah MERN STACK and REACT NATIVE DEVELOPER"
        value={postText}
        onChangeText={setPostText}
        multiline
      />

     
        <Image  source={{ uri: "https://media.licdn.com/dms/image/D4D22AQFB9ENWIzx9Pw/feedshare-shrink_1280/0/1687705305011?e=1707350400&v=beta&t=FJMwHEzCtvYmN9Hlc0rp9V7IBsM1KqrMH3edHCOjanU" }} style={styles.attachedImage} />
      

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.attachButton} onPress={handleAttachImage}>
          <Ionicons name="images-outline" size={24} color="#3b82f6" />
          <Text>Attach Images</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    marginTop: 50,
  },
  attachedImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attachButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  postButton: {
    backgroundColor: '#3b82f6',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Post;
