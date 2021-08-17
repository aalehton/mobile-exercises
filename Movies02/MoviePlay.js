import react, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions
  } from 'react-native';
  
  import YoutubePlayer from 'react-native-youtube-iframe';

  export default function MoviePlay(props) {

  const { route } = props;
  const { filmKey } = route.params;
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

  return(
      <View style={{ transform: [{ rotate: "90D"}]}}>
          <View style={{backgroundColor: "gray"}}>
              <YoutubePlayer height={screenWidth}
              width={678}
              play={true}
              videoId={filmKey}
              />
              </View>
              </View>
  )
  }
  const styles = StyleSheet.create({
    image: {
        aspectRatio: 670/250
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    text: {
        fontSize: 12,
        flexWrap: 'wrap'
    }
  });