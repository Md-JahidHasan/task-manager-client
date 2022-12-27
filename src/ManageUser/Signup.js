import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Contexts/AuthProvider/Authprovider';

const Signup = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);


    const {register, handleSubmit} = useForm();
    const [data, setData] = useState();
    const handleSignUp = (data) =>{

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`

        // Image hosting in IMGbb
        fetch(url, {
            method:'POST',
            body: formData
        }).then(res=>res.json())
        .then(imageData=>{
            if(imageData.success){
                // console.log(imageData.data.display_url);
                // Got image utl after hosting in imgbb
                const imageURL = imageData.data.display_url;

                // console.log(data.userEmail, data.userPassword);
                createUser(data.userEmail, data.userPassword)
                .then(result=>{
                    const user = result.user;

                    const userInfo = {
                        displayName:data.userName,
                        photoURL: imageURL
                    }
                    updateUserProfile(userInfo)
                    .then(result=>{
                        // Profile Updated
                    }).catch(err=>{
                        console.error(err);
                    })
                    console.log(userInfo);
                }).catch(err=>{
                    console.error(err);
                })


            }
        })

        // console.log(image, url);
    }

    return (
        <div className="hero min-h-screen bg-base-200 py-4">
            <div className="card w-11/12 md:w-2/5  shadow-2xl bg-base-100">
                <div className="card-body">
                   <form onSubmit={handleSubmit(handleSignUp)} action="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("userName")} type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Choose Your Photo</span>
                            </label>
                            <input {...register('image')} type="file" placeholder="" className="input input-bordered pt-2" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input {...register('userEmail')} type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register('userPassword')} type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 mb-4">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                   </form>
                    <h2 className='text-sm'>Already Have an account? Please <span className='text-blue-600 font-bold'>Login</span></h2>
                    <hr />
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Continue With Google</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Signup;