import React from 'react';

function Items({ data }) {
  return (
    <ul>
      {data.map(item => (
        <>
          <li key={item.id}>{item.title}</li>
          <li>{item.body}</li>
        </>
      ))}
    </ul>
  );
}

export default Items;