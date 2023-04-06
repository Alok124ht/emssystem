import React from 'react';

import './MyComponent.css';

const MyComponent = () => {
  return (
    <div className="my-component">
      <h2>Edges</h2>
      <Edge topVertexType="Out" bottomVertexType="In" className="presence" />
      <Edge topVertexType="In" bottomVertexType="Out" className="absence" />
      <Edge topVertexType="Out" bottomVertexType="Out" />
      <Edge topVertexType="In" bottomVertexType="In" />
    </div>
  );
};

export default MyComponent;
