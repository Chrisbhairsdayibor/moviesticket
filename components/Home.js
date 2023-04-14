import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useGetMoviesQuery } from '../features/APISlice'

export default function Home() {
    const{data, error, isLoading}=useGetMoviesQuery()
  return (
    <View>
      <Text style={styles.heading}>Home</Text>
{data?.map((item) => (
  <View key={item.id}>
    <Text>{item.id}</Text>
    <Text>{item.title}</Text>
    <Text>{item.genre}</Text>
    <Text>{item.stars}</Text>
    <Text>{item.plot}</Text>
    <Button onPress={() => alert(item.id)}>title='Buy'</Button>
  </View>
))}
      {/* <Image
        source={{
          uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        }}
        style={{ width: 200, height: 200 }}
      /> 
      <Button
        onPress={() => {
          console.log(
            'Button',
            '<------This is the data😊😊😊😊😊😊😊😊😊😊😊😊'
          )
        }}
        title='Hello'
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: '30px',
    color: 'red',
  },
})
