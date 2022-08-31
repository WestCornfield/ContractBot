import React, { ReactElement, useEffect, useState } from 'react';

export function GreetingBot(props : any): JSX.Element {
  const { message, buttons, setMessage, setButtons, setState, setUserRequest } = props;

  const handleButtonClick = (buttonText : string) => {
    if (buttonText === "Go ahead.") {
      setState('legal');
    } else {
      setUserRequest(buttonText);
      setMessage('Okay, but before we get started. I should clear up a few things, for legal purposes.');
      setButtons(['Go ahead.']);
    }
  };

  const buttonsComponent = () => {
    const buttonsComponentElement: ReactElement[] = [];

    buttons.forEach((button : string) => {
      buttonsComponentElement.push(<button onClick={() => handleButtonClick(button)}>{button}</button>)
    });

    return buttonsComponentElement;
  };

  return (<>
    <div id="dialogue"></div>
    <div className="contract-bot">{message}</div>
    <div>
      { buttonsComponent() }
    </div>
  </>);
}
