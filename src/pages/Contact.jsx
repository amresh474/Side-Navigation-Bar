import React from "react";
import { Layout } from "../components/Layout/Layout";
export const Contact = () => {
  return (
    <Layout>
   <div className="info">
      <div>Contact Details ......! 
     
      <h1>Login</h1>
      <form >
        <div >
          <input type="text" required />

          <label>Username</label>
        </div>
        <div >
          <input type="password" required />

          <label>Password</label>
        </div>
      
      </form>
    </div>
    </div>
    </Layout>
    
  );
};
