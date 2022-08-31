import React, { ReactElement, useEffect, useState } from 'react';

export function LegalBot(props : any): JSX.Element {
  const { message, buttons, setMessage, setButtons, setState } = props;

  useEffect(() => {
    setMessage('ContractBot is presented for entertainment and educational purposes. Neither this webpage nor its creator are providing professional legal advice. Neither this webpage nor its creator are your attorney. Neither this webpage nor its creator purport to be experts in contract law, general law or the specific subject matter you inquire about as the user. If interested in pursuing a legal matter, please consult a professional licensed attorney.');
    setButtons(['I understand that you are not giving me professional legal advice and that you are not my attorney.']);
  }, []);

  const handleButtonClick = () => {
    setState('standard');
  };

  const buttonsComponent = () => {
    const buttonsComponentElement: ReactElement[] = [];

    buttons.forEach((button : string) => {
      buttonsComponentElement.push(<button onClick={handleButtonClick}>{button}</button>)
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
