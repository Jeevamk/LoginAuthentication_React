import React, { useEffect, useRef, useState } from 'react'



const USER_REGX = /^[a-zA-Z][a-zA-Z-0-9-_]{3,23}$/;
const PWD_REGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user,setUser] = useState('')
  const [validName,setValidName] = useState(false)
  const [userFocus,setUserFocus] = useState(false)

  const [pwd,setPwd] = useState('')
  const [validPwd,setValidPwd] = useState(false)
  const [pwdFocus,setPwdFocus] = useState(false)

  const [matchPwd,setMatchPwd] = useState('')
  const [validMatch,setValidMatch] = useState(false)
  const [matchFocus,setMatchFocus] = useState(false)

  const [errMsg,setErrMsg] = useState('')
  const [success,setSuccess] = useState(false)

  useEffect(()=>{
    userRef.current.focus()
  },[])

  useEffect(()=>{
    const result = USER_REGX.test(user)
    console.log(result);
    console.log(user);
    setValidName(result)
  },[user])

  
  
  return (
    <div>
      <h1>Register</h1>
    </div>
  )
}

export default Register;