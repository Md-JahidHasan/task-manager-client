import React, {useState} from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/Authprovider';
import { useForm } from "react-hook-form";

const Login = () => {
    const { logInUser, providerLogin } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState();

    const handleLogIn = (data) =>{
        logInUser(data.userEmail, data.password )
        .then((result)=>{
            const user = result.user;
        }).catch(err=>{
            console.error(err);
        })
        console.log(data.userEmail, data.password);
    }

    const handleProviderLogIn = () =>{
        providerLogin()
        .then(result=>{
            const user = result.user;
        }).catch(err=>{
            console.error(err);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 py-4">
            <div className="card w-11/12 md:w-2/5  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleLogIn)} action="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register('userEmail')} type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register('password')}  type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        </form>
                    <h2 className='text-sm'>New to Task Manager? Please <Link to='/signup' className='text-blue-600 font-bold'>Create Account</Link></h2>
                    <hr />
                    <h2>OR</h2>
                    <div className="form-control mt-4">
                        <button onClick={handleProviderLogIn} className="btn btn-primary">Continue With Google</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Login;