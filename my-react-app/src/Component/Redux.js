// Redux.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './Redux/Actions'; // Adjust the import path if needed

function Redux({ count, increment, decrement }) {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter.count // Adjust the property name based on your root reducer structure
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
