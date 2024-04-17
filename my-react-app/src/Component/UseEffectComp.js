import React, { useEffect } from 'react';

function UseEffectComp() {
  useEffect(() => {
    // Perform tasks after the component is mounted
    console.log('Component mounted');

    // Example: Fetch data from an API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched:', data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <div>
      {/* Component content */}
    </div>
  );
}

export default UseEffectComp;
