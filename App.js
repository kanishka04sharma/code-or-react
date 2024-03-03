import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';


const WebApp = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const Element=ReactDOM.createRoot(document.getElementById("root"));
Element.render(<WebApp />);
