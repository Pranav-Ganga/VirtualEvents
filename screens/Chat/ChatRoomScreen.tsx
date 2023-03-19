import { View, Text } from 'react-native'
import React from 'react'
import { useChatContext } from '../../Context/ChatContext';
import { Channel, MessageList, MessageInput } from 'stream-chat-expo';

const ChatRoomScreen = () => {
  const {  } = useChatContext();

  return (
    <Channel channel={currentChannel}>
      <MessageList />
      <MessageInput/>
    </Channel>
  )
}

export default ChatRoomScreen