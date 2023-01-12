import { useRef, useState } from "react"

export default function Login() {

  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null);

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "email": emailRef.current!.value,
          "password": passRef.current!.value
      })
    });
    const json = await response.json();
    setMessage(json);
  }

  return (
    <div>
      {JSON.stringify(message)}
      <input type="text" placeholder="Email" ref={emailRef} value="mucahidyazar@gmail.com" />
      <input type="text" placeholder="Password" ref={passRef} value="05369120161" />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}