import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');
  const [token, setToken,navigate,backendUrl] = useContext(ShopContext);
  const[name,setName] = useState('')
  const[password,setPassword] = useState('')
  const[email,setEmail] = useState('')
  const onSubmitHandler = async (event) => {
      event.preventDefault();
      try{
        if(currentState === 'sign up'){
          const response = await axios.post (backendUrl+'/api/users/register', {name,email,password})
          if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
          }else{
            toast.error(response.data.message)
          }


        }else{
          const response =await axios.post(backendUrl+'/api/users/register', {email,password})
          if (response.data.sucess){
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)

          }else{
            toast.error(response.data.message)
          }

        }

      }catch(error){
        console.log(error)
        toast.error(error.message)

      }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value) } value={name} type='text' className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input onChange={(e)=>setEmail(e.target.value) } value={email} type='email' className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input onChange={(e)=>setPassword(e.target.value) } value={password} type='password' className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === "Login"
          ? <p onClick={()=>setCurrentState('Sign up')} className='cursor-pointer'>Create account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign up'}</button>
    </form>
  )
}

export default Login
