import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [time, setTime] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        let intervalId: any;
        if (success) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [success]);

    useEffect(() => {
        if (time <= 0) {
            navigate('/');
        }
    }, [time]);

    function validateEmail(email: string): boolean {
        // Regular expression pattern for validating email address
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError(true);
            return;
        }
        setSuccess(true);
        return;
    }

    return (
        <>
            <div className="mt-8 px-16 flex justify-between">
                <div className=" text-3xl font-bold"><a href="/"><img src="images/brunel.png" alt="Brunel Logo" /></a></div>
                {success ? '' :
                    <a href="/">
                        <div className="rounded-full cursor-pointer border-2 p-3 transform hover:scale-110 hover:bg-gray-50 transition duration-300 ease-in-out">
                            <img src="closebutton.png" alt="close button" width={40} />
                        </div>
                    </a>
                }

            </div>
            <div className=" mt-28">
                {success ?
                    <>
                        <div className="mx-auto w-20">
                            <img src="greentick.png" alt="" />
                        </div>
                        <div className="covered-by-your-grace-regular text-4xl mx-auto text-center mt-10" style={{ color: '#2DA950' }}  >
                            Success Submitted
                        </div>
                        <div className="text-6xl font-semibold mx-auto text-center mt-5">
                            Congratulations
                        </div>
                        <div className="max-w-3xl mx-auto font-medium text-3xl text-center mt-5" style={{ color: '#A6A3A0' }}>
                            Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
                        </div>

                    </>
                    :
                    <>
                        <div className="covered-by-your-grace-regular text-3xl mx-auto w-56 mt-10" style={{ color: '#2DA950' }}  >
                            Registration Form
                        </div>
                        <div className="text-5xl font-medium max-w-4xl mx-auto text-center mt-5">
                            Start your success <br />
                            Journey here!
                        </div>
                        <div className=" mt-16 bg--500 max-w-sm mx-auto">
                            <form onSubmit={handleSubmit}>
                                <input type="text" className=" focus:bg-white my-2 w-full px-6 py-5 rounded-full bg-gray-100" placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                                <input type="text" className=" focus:bg-white my-2 w-full px-6 py-5 rounded-full bg-gray-100" placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError(false);
                                    }} />
                                <div className={` ${error ? '' : 'hidden'} ml-1 mt-1 text-red-600`}>
                                    <span className="text-white bg-red-600 rounded-full px-2">!</span> Enter a valid email address
                                </div>
                                <button
                                    disabled={name === '' || email === ''}
                                    className="w-full text-center px-6 py-5 disabled:bg-zinc-500 rounded-full bg-black text-white my-5 transform active:scale-95 transition duration 300 ease-in-out" >Submit</button>
                            </form>
                        </div></>}
            </div>
            {success &&
                <div className=" w-full text-center absolute bottom-8 text-center font-medium text-2xl " style={{ color: '#A5A2A0' }}>
                    Redirecting you to Homepage in <span className="text-black">{time} Seconds</span>
                </div>
            }
        </>
    );
}