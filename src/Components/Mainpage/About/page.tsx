import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div>
        <Image
        src="/images/back.png"
        alt="Example Image"
        width={500} 
        height={300}
        priority 
      />
    </div>
  )
}

export default About