import { View, Text } from 'react-native';
import React,{useContext} from 'react';
import { useChatContext } from '../../Context/ChatContext';

const ChatsScreen = () => {

  const {username}= useChatContext();
  return (
    <View>
      <Text>{username}</Text>
    </View>
  )
}

export default ChatsScreen