import React from 'react'
import Title from '../components/Title'
import Form from '../components/Form'

const Home = () => {
  return (
    <div className='w-screen h-full mt-40 flex flex-col justify-center items-center'>
        <Title text="URL Shortener Service :" />
        <Form />
    </div>
  )
}

export default Home