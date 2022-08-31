import React, { ReactElement, useEffect, useState } from 'react';

export function StandardBot(props : any): JSX.Element {
  const { message, buttons, userRequest,  setMessage, setButtons, setState, setStandard } = props;

  useEffect(() => {
    setMessage(`Now, I understand you ${userRequest}, but the first step in many contract questions is to consider what standard of law we'll be applying. So, what are you contracting over?`);
    setButtons(['A gig or a job.', 'Land or real estate.', 'An animal', 'A product', 'Why does this matter?']);
  }, []);

  const handleButtonClick = (buttonText : string) => {
    setState('standard');

    if (buttonText === 'A gig or a job.' || buttonText === 'Land or real estate.') {
      setStandard('common');
    } else {
      setStandard('ucc');
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
