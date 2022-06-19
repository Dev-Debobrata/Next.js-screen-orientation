import React, { useState, useEffect } from 'react'

function Screen() {

  function getOrientation() {
    return screen.orientation.type
  }

  const [orientation, setOrientation] = useState(getOrientation());


  const updateOrientation = event => {
    setOrientation(getOrientation());
  };

  useEffect(() => {
    window.addEventListener('orientationchange', updateOrientation);
    return () => {
      window.removeEventListener('orientationchange', updateOrientation);
    };
  });

  return (
    <div>
      Your Orientation is {getOrientation()}
      <br />
    </div>
  )
}

export default Screen