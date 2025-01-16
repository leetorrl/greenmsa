import { useState } from 'react'

import './App.css'

interface LoginSectionProps {
  bgColor: string;      // bgColor는 string 타입
  clicklogin: () => void;  // clicklogin은 함수 타입

}


function App() {
  return (
    <>
      <div className="w-[1980] bg-red-100">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}



const Header =()=> {
  return (
    <div className="bg-blue-100">
      <h1>헤더</h1>
    </div>
  );
}

const Body = ()=> {
  const [bgColor, setBgColor] = useState('bg-blue-800');

  const clicklogin = () => {
    setBgColor((prev) => (prev === 'bg-red-500' ? 'bg-blue-800' : 'bg-red-500'));

    console.log()
  };

  return (
    <div className="flex justify-center border bg-[#eee]">
      <h1 className="absolute left-0">바디</h1>
      <LoginSection bgColor={bgColor} clicklogin={clicklogin} />
    </div>
  );
}


const LoginSection: React.FC<LoginSectionProps> = ({ bgColor, clicklogin }) => {
  

  const [userid , setid]= useState('');
  const [password , setpassword]=useState('');

  const userlogin = () => {

    console.log('아이디:', userid);
    console.log('비밀번호:', password);
    clicklogin();
  
  }

  return (
    <div className="flex flex-col items-center space-x-4 w-[500px] ">
      <div>
      <h1 className="text-3xl mb-4 text-center">Login</h1>
      <form>
        <input 
          value={userid}
          onChange={(e)=>{setid(e.target.value)}}
          className="border inline p-2 w-[300px] box-border mt-1"
          placeholder="아이디"
          type="text"
        />
        <br />
        <input
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
          className="border inline p-2 w-[300px] box-border mt-1"
          placeholder="비밀번호"
          type="password"
        />
      </form>

      <div className=" float-left mt-2">
        <input className=" inline rounded-sm" type="checkbox" />
        <h1 className="inline ml-1">로그인상태유지</h1>
      </div>
      <br />
      <div
        onClick={userlogin}
        className={`cursor-pointer mt-3 text-center w-[300px] p-2 box-border text-white ${bgColor}`}
      >
        로그인
      </div>
      <div className="mt-1">
        <h1 className="float-left cursor-pointer">회원가입</h1>
        <h1 className="float-right cursor-pointer">아이디 / 회원가입</h1>
      </div>
    </div>
    </div>
  );
}

const Footer = () =>  {
  return (
    <div className="bg-gray-100">
      <h1>푸터</h1>
    </div>
  );
}

export default App
