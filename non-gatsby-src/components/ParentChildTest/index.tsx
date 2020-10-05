import React, {useState} from 'react';
const { Provider, Consumer } = React.createContext('');


/*
* This is a good clean example of context sharing across components or whatever. wrap the provider and consumers
* */
const ParentChildTest = (): JSX.Element => {
  return (
    <>
      <ParentTest text="">
        <ChildTest/>
      </ParentTest>
    </>
  );
};

const ParentTest = (props: any): JSX.Element => {
  const [text, changeText] = useState(props.text || 'parent-test');
  return (
    <Provider value={text}>
      {props.children}
      <button onClick={() => changeText('button-test')}>Change text</button>
    </Provider>
  );
};

const ChildTest = () => <Consumer>{(text:string) => <h1>{text}</h1>}</Consumer>;

export default ParentChildTest;
