import React from 'react';

import Message from './Message';

const MessageList = ({ messages }) => {
  const combineMessages = () => {
    /*
      * Yhdistää viestit, jotka ovat tulleet
      * peräkkäin samalta käyttäjältä
      
      * ENNEN
      * -----
      * @Atte
      * Hei tämä on viesti 1
      * @Atte
      * Tämä on viesti 2
      * @Uolevi
      * Tämä on viesti 3
      * @Atte
      * Tämä on viesti 4
      
      * JÄLKEEN
      * -------
      * @Atte
      * Hei tämä on viesti 1
      * Hei tämä on viesti 2
      * @Uolevi
      * Tämä on viesti 3
      * @Atte
      * Tämä on viesti 4
    */
    let result = [];

    if (!messages.length)  {
      return result;
    }

    let currentUsername = messages[0].username;
    let contents = [ messages[0].content ];

    const len = messages.length;
    for (let i = 1; i <= len; i++) {
      if (i === len) {
        result.push({
          username: currentUsername,
          contents,
          id: messages[len - 1].id
        });

        break;
      }

      const currentMessage = messages[i];

      if (currentMessage.username === currentUsername) {
        contents.push(currentMessage.content);
        continue;
      }

      result.push({
        username: currentUsername,
        contents,
        id: messages[i - 1].id
      });

      currentUsername = currentMessage.username;
      contents = [ currentMessage.content ];
    }

    return result;
  }

  const messageRows = () => combineMessages().map(message => 
    <Message username={message.username} contents={message.contents} key={message.id} />
  );

  return (
    <div>
      { messageRows() }
    </div>
  );
};

export default MessageList;