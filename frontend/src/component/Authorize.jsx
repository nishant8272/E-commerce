import React from 'react'

const Authorize = () => {
  return (
<div className='flex flex-col items-center h-screen bg-cover  bg-[url("https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?t=st=1744740262~exp=1744743862~hmac=13fb0761ea01245d87bd38399007373060c195c4fdcb041288f204bd3312b03e&w=900")]'>
<h1 className='text-white p-10'>Welcome! we are greatful to have you</h1>
      <div className='w-150 h-70'>
        <h1 className='text-white'>Create Account Here</h1>
        <br />
        <div>
            <label className='text-white font-bold' htmlFor="name">Name : </label>
            <input className='border-b-gray-400 border-2 rounded-sm pl-3'
            id='name'
            type="text"
            placeholder='enter username' />
        </div>
        <br />
        <div>
            <label className='text-white font-bold' htmlFor="name">Password : </label>
            <input className='border-b-gray-400 border-2 rounded-sm pl-3'
            id='name'
            type="text"
            placeholder='enter Password' />
        </div>
        <br />
        <div>
            <label className='text-white font-bold' htmlFor="name">Gmail : </label>
            <input className='border-b-gray-400 border-2 rounded-sm pl-3'
            id='name'
            type="text"
            placeholder='enter gmail address' />
        </div>
        <br />
        <button className='p-2'>LOGIN</button>
      </div>
    </div>
  )
}

export default Authorize
