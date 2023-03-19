import { useUserData } from "@nhost/react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { StreamChat } from 'stream-chat';

export const ChatContext = createContext({});

const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
    //component
    const [chatClient, setChatClient]= useState<StreamChat>();

    const user = useUserData();

    useEffect(() => {
        const initChat = async () => {
            if (!user) {
                return;
            }

            const client = StreamChat.getInstance("3y4uteu4ye2t");

            // get information about the authenticated user
            // connect the user to stream chat
            await client.connectUser({
                id: user.id,
                name: user.displayName,
                image: user.avatarUrl,
            }, client.devToken(user.id));

            setChatClient(client);

            const globalChannel= client.channel("livestream","global",{name:"pranav",});

            await globalChannel.watch();
        };

        initChat();
    }, []);

    useEffect(()=>{
        return()=>{
            if(chatClient){
                chatClient.disconnectUser();
            }
        }
    },[])

    const value = { username: "Pranav" };
    return (
        <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
    )
};

export const useChatContext = () => useContext(ChatContext);

export default ChatContextProvider;