import { hot } from "react-hot-loader/root";
import React from "react";

const App = () => {
  return ( 
    <div className="container mx-auto px-4 py-10">
      <ul className="list-none hover:list-disc bg-slate-300">
        <li>MERN STACK</li>
        <li>Webpack</li>
        <li>Tailwindcss</li>
      </ul>
    </div>
  )
};

export default hot(App);
