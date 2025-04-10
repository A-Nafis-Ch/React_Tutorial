import React, {useState} from 'react'
import style from './form.module.css'

function FORM() {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

   
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const {name,email,password} = user;

    // const nameHandler = (e) =>{
    //     setName(e.target.value);
    //     // console.log(e.target.value)
    // }
    // const emailHandler = (e) =>{
    //     setEmail(e.target.value);
    //     // console.log(e.target.value)
    // }
    // const passwordHandler = (e) =>{
    //     setPassword(e.target.value);
    //     // console.log(e.target.value)
    // }

const HandleChange = (e) => {

    setUser({...user,[e.target.name]: e.target.value});
}

    const submitHandler = (e) =>{

        console.log('Submitted')
        // const userInfo = {
        //     name,
        //     email,
        //     password,
        // }

        // console.log(userInfo);

        console.log(user);
        e.preventDefault();
        
    }

  return (
    <div>

        <div>
        <h1 >Registration Form</h1>
        </div>
        
        <form action='' onSubmit={submitHandler}>

            <div className={style.formGroup}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' id='name' value={name}
            onChange={HandleChange} required></input>
            </div>

            <div className={style.formGroup}>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' id='email' value={email} onChange={HandleChange}required></input>
            </div>

            <div className={style.formGroup}>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' id='password' value={password} onChange={HandleChange}required></input>
            </div>

            <div>

                <button type='submit' >Submit</button>
            </div>

        </form>

      
    </div>
  )
}

export default FORM
