import React from 'react'
import image1 from "../assets/1.jpg"

function Home() {
  return (
    <>
    <div className=" md:flex mx-auto p-10 gap-10 ">
      <img src={image1} className=' h-80  rounded-2xl' alt="plant" />
      <div>
        <p className=' pr-10 pt-5  text-lg '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit esse praesentium consequuntur officiis fugiat necessitatibus id sit saepe quaerat adipisci recusandae corrupti 
          doloribus quis asperiores, culpa consequatur voluptatem dignissimos? Numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellat consectetur molestiae quae quam temporibus ratione nihil quos molestias, quisquam consequuntur sunt, reiciendis atque
           similique. Obcaecati explicabo non itaque corrupti.
        </p>

      </div>
      </div>
      <hr />

      <div className=' text-center mx-auto  mt-5'>
        <h2 className=' text-4xl font-bold'>Features</h2>
      </div>
    
    </>
  )
}

export default Home