import React, { useEffect } from 'react';
let guest = 0;
let key = 0;
function Cup({ key, guest }) {
  return <h2>Tea cup for guest # {key} {guest}</h2>;
}

export default function Aboutus() {
  //useEffect(() => {
  // Perform tasks after the component is mounted
  console.log('Component mounted About-Us');
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
  //})
}
