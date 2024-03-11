import React from 'react';

// Parent component
const ParentComponent = () => {
  return (
    <div>
      <h1>This is the Parent Component</h1>
      <ChildComponent />
    </div>
  );
};

// Child component
const ChildComponent = () => {
  return (
    <div>
      <h2>This is the Child Component</h2>
    </div>
  );
};

export default ParentComponent;
