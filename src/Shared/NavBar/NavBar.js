import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/Authprovider';
import {useContext} from 'react';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }
    return (
        <div className="navbar medium_bg dark:bg-slate-900 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow medium_bg rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/addTask'>Add Task</Link></li>
                        <li><Link to='/myTask'>My Task</Link></li>
                        <li><Link to='/completedTask'>Completed Task</Link></li>
                        {
                            user && <li><button onClick={handleLogOut} className='sm:hidden'>Logout</button></li>
                        }
                        
                        
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl">Task Manager</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/addTask'>Add Task</Link></li>
                    <li><Link to='/myTask'>My Task</Link></li>
                    <li><Link to='/completedTask'>Completed Task</Link></li>
                    
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex items-center text-center '>
                        <button onClick={handleLogOut} className='btn btn-xs btn-outline text-sm mx-4 my-1 hidden sm:block'>Logout</button>
                        <div className="avatar ">
                            <div className="w-16 mask mask-squircle">
                                <img className='w-16 h-16' src={user?.photoURL} alt='' />
                            </div>
                        </div>
                    </div> : 
                    <Link to='/login' className='btn btn-sm mr-4'>Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;