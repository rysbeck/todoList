import React from 'react'
import {Link, useNavigate, useLocation} from "react-router-dom";
import {useForm} from "react-hook-form"
import axios from 'axios';
import "./Form.scss"

function Form() {
    const navigate = useNavigate();
    const location = useLocation();

    const {
    register,
    handleSubmit,
    reset,
    formState:{errors},
  }=useForm({mode:"onBlur"});


  const registerUser=(data)=>{
    axios
      .post("http://localhost:4000/register",
      {
      ...data,
      categories:[],})
    .then(()=>{
      reset()
      navigate("/")
    })
    .catch((err)=>console.log(err));
  };

  const loginUser=(data)=>{
    axios
      .post("http://localhost:4000/login",
      {
      ...data,
    })
    .then(()=>{
      reset()
      navigate("/")
    })
    .catch((err)=>console.log(err));
  };
  const onSubmit = (data) =>{
    location.pathname === "/register" ? registerUser(data) : loginUser(data)
  }
  return (
    <form noValidate className='form' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='form__title'>
                {
                    location.pathname === "/register" ? "Registration" : "Enter"
                }
                </h2>
            {
                location.pathname ==="/register" ? <input {...register("login",{
              required:{
                message:"You need to fill login form",
                value:true,
              },
              maxLength:{
                message:"max 10 characters",
                value:10
              },
              minLength:{
                message:"min 3 characters",
                value:3
              },
            })} 
            className='form__field' 
            type="text" 
            placeholder='Enter your name' /> : ""
            }
            <p className='form__error'>
              {errors.login && errors.login.message}
            </p>
            <input 
            {...register("email",{
              required:{
                message:"You need to fill login form",
                value:true,
              },
              maxLength:{
                message:"max 20 characters",
                value:20,
              },
              minLength:{
                message:"min 3 characters",
                value:3
              },
              pattern:{
                message:"Please fill the correct email",
                value:/^[^]+@[^]+\.[a-z]{2,5}$/,
              }
            })} 
            className='form__field' 
            type="email" 
            placeholder='Enter your email' />
            <p>
              {errors.email && errors.email.message}
            </p>
            <input 
            {...register("password",{
              required:{
                message:"You need to fill login form",
                value:true,
              },
              maxLength:{
                message:"max 20 characters",
                value:20,
              },
              minLength:{
                message:"min 3 characters",
                value:3,
              },
              pattern:{
                message:"Password should be consisted of minimum eight characters, at least one letter and one number",
                // value:/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/
              },
            })} 
            className='form__field' 
            type="password" 
            placeholder='Enter your password' />
            <p className='form__error'>
              {errors.password && errors.password.message}
            </p>
            <button type='submit' className='form__btn'>
                {
                    location.pathname === "/register" ? "Check in" : "Enter"
                }
            </button>
            <p className="form__text">
                {
                    location.pathname === "/register" ?<> Do you have an account? 
            <Link className="form__link" to="/login">
                Login
            </Link></> : 
            <>
            No have an account, please, <Link className="form__link" to="/register"> login.</Link>
            </>
                }
            </p>
        </form>
  )
}

export default Form