import React from 'react';
import Nav from './Nav';

function Login() {
  return (
<>
  
    <div className="flex items-center justify-center h-screen bg-[#E4B1F0]">
      <div className="card w-96 bg-[#FFE1FF] bg-opacity-80 shadow-lg">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Enter your email" className="input input-bordered" />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Enter your password" className="input input-bordered" />
            </div>
            <div className="form-control">
              <button className="btn bg-[#7E60BF] hover:bg-[#6b4ca5] text-white">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
