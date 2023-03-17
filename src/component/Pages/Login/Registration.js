import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext';

const Registration = () => {
    const [error, setError] = useState(null)
    const {createUser} = useContext(AuthContext)
    const naviagate = useNavigate()

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6 ){
            setError('please should 6 character or more.')
            return;
        }

       createUser(email, password)
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
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto">
                    <div className='card-body'>
                    <form onSubmit={handleSignUp} className="">
                        <h2 className='text-4xl font-bold mb-3 text-center text-slate-600'>Registration</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="E-mail" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        <span className='text-red-500'>{error}</span>
                        </div>
                        
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                    </form>
                    <div className="form-control mt-2">
                        <button className="btn btn-outline">Continue with google</button>
                    </div>
                    <span className='text-center'>Already have and account please <Link to='/login' className='text-bold text-sky-500 underline'>Login</Link></span>
                    {/* <h2 className='text-gray-500 text-4xl'>{user?.email}</h2> */}
                </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Registration;