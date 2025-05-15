import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Authorize = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is user
  let inputRole = useState(null)
  if (role == 'admin') {
    inputRole = "adminregister"
  } else if (role == 'user') {
    inputRole = "userregister"
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/${inputRole}`, {
        name,
        email,
        password,
        role,
      });
      const { TOKEN } = response.data;
      if (role == "admin") {
        localStorage.setItem("seller", TOKEN);
      } else if (role == "user") {
        localStorage.setItem("user", TOKEN);
      }
      alert("Registration successful!");
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error appropriately
    }
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="gmail" className="block font-medium text-black">Email</label>
            <input
              id="gmail"
              type="email"
              placeholder="Enter Gmail address"
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-black font-medium">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded px-3 text-black py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-black font-medium">Role</label>
            <select
              id="role"
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Create Account
          </button>
        </div>
      </div>
    </form>
  );
};

export default Authorize;

