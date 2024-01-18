import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Card_style';

const Card = (props: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: props.song.imageUrl}} />

      <View style={styles.innerContainerStyle}>
        <Text style={styles.titleStyle}> {props.song.title} </Text>

        <View style={styles.mergeContainer}>
          <View style={styles.infoContainerStyle}>
            <Text style={styles.artistTextStyle}> {props.song.artist} </Text>
            <Text style={styles.yearTextStyle}> {props.song.year} </Text>
          </View>

          {
            props.song.isSoldOut && (
              <View style={styles.soldOutContainer}>
            <Text style={styles.soldOutTitleStyle}> Tükendi </Text>
          </View>
            )
          }

          
        </View>
      </View>
    </View>
  );
};

export default Card;
