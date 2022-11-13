import React from 'react';
import Image from 'next/image';

const MyComponent = () => {
  return (
    <Image
    src="/images/profile.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Sunny"
  />
  )
}

export default MyComponent