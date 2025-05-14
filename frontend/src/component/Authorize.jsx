import React, { useState } from 'react';

const Authorize = () => {
  const [form, setForm] = useState({
    name: '',
    password: '',
    gmail: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Later: Send to backend or validate
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?t=st=1744740262~exp=1744743862~hmac=13fb0761ea01245d87bd38399007373060c195c4fdcb041288f204bd3312b03e&w=900')]">
        <h1 className="text-white text-2xl font-semibold mb-6">Welcome! We're grateful to have you</h1>
        <div className="bg-white p-6 rounded-md shadow-md w-80 space-y-4">
          <h2 className="text-xl font-bold text-center text-black">Create Account</h2>

          <div>
            <label htmlFor="name" className="block font-medium text-black">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter username"
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="gmail" className="block font-medium text-black">Gmail</label>
            <input
              id="gmail"
              type="email"
              placeholder="Enter Gmail address"
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
              value={form.gmail}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-black font-medium">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded px-3 text-black py-2"
              value={form.password}
              onChange={handleChange}
            />
          </div>


          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            disabled={!form.name || !form.password || !form.gmail}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Authorize;

