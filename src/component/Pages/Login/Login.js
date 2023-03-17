import React, { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext';

const Login = () => {
    const {user, signIn} = useContext(AuthContext)
    const naviagate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
            naviagate('/')
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto
        py-10'>
            <div></div>
            <div className='w-full m-auto'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto py-5">
                    <div className='card-body'>
                    <form onSubmit={handleSubmit} className="">
                        <h2 className='text-4xl font-bold mb-3 text-center text-slate-600'>Login</h2>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        </div>
                        <div className="form-control mt-5 mb-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <span className='text-center'>Create new account please <Link to='/registration' className='font-bold text-sky-500 underline'>Registration</Link></span>
                    
                </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Login;