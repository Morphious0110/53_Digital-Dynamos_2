import React, { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    const kommunicateSettings = {
      appId: "19f88c4aead2befe6eddd8d4a312f3266",
      popupWidget: true,
      automaticChatOpenOnNavigation: true,
      onMessageReceived: function({ message }) {
        // Callback function to handle incoming messages
        console.log("Received message:", message);

        if (message === "Hello") {
          window.kommunicate.sendMessage({
            message: "Hi there! How can I assist you today?",
            from: "bot",
          });
        }
      },
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.kommunicate.io/v2/kommunicate.app";

    const head = document.getElementsByTagName("head")[0];
    head.appendChild(script);

    window.kommunicate = window.kommunicate || {};
    window.kommunicate._globals = kommunicateSettings;

    // Clean up function
    return () => {
      head.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatBot;
