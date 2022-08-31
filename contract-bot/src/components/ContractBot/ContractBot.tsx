import React, { ReactElement, useEffect, useState } from 'react';
import { GreetingBot } from '../GreetingBot';
import { LegalBot } from '../LegalBot';
import { StandardBot } from '../StandardBot';

export function ContractBot(): JSX.Element {

  const [state, setState] = useState('greeting');
  const [message, setMessage] = useState<string>('');
  const [messageHistory, setMessageHistory] = useState<string[]>([]);
  const [buttons, setButtons] = useState<string[]>([]);
  const [userRequest, setUserRequest] = useState<string>('');
  const [standard, setStandard] = useState<string>('');

  useEffect(() => {
    setMessage('Hello! My name is ContractBot! I was designed to help people navigate the fun and exciting world of Contract Law! How can I help you? Do you...');
    setButtons(['want help getting out of a contract', 'want help with someone not performing contractual duties']);
  }, []);

  const handleButtonClick = (buttonText : string) => {
    setUserRequest(buttonText);
    setMessage('Okay, but before we get started. I should clear up a few things, for legal purposes.');
    setButtons(['Go ahead.']);
  };

  const buttonsComponent = () => {
    const buttonsComponentElement: ReactElement[] = [];

    buttons.forEach((button : string) => {
      buttonsComponentElement.push(<button onClick={() => handleButtonClick(button)}>{button}</button>)
    });

    return buttonsComponentElement;
  };

  return (<>
    { state === 'greeting'
      ? <GreetingBot
          message={message}
          buttons={buttons}
          setMessage={setMessage}
          setButtons={setButtons}
          setUserRequest={setUserRequest}
          setState={setState}
      />
      : state === 'legal'
      ? <LegalBot
          message={message}
          buttons={buttons}
          setMessage={setMessage}
          setButtons={setButtons}
          setState={setState}
      />
      : state === 'standard'
      ? <StandardBot
        message={message}
        buttons={buttons}
        userRequest={userRequest}
        setMessage={setMessage}
        setButtons={setButtons}
        setState={setState}
        setStandard={setStandard}
      /> : <></> }
  </>);
}
