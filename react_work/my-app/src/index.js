import React from 'react';
import ReactDOM from 'react-dom/client';
import { Testcom, Testcom2, Rut } from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <>
  <div className="App">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Hello, Tailwind CSS with React!
       
      </h1>
       <Testcom />
       <Testcom2 />
       --------------
       <Rut/>
    </div>
 </>
);


