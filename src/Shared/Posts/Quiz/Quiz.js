import React from 'react';
import { useForm } from 'react-hook-form';

const Quiz = () => {
    const { register, handleSubmit } = useForm();

    return (
        <>
            <div className='quiz-heading'>
                <h1>ENJOY YOUR QUIZ</h1>
            </div>
            <div className='main-part rounded'>
                <div className='quiz-first-sec'>
                    <div>
                        <div className='quiz-label-input'>
                            <label for=''>Date</label>
                            <input {...register("assignment")} type='date' className="" />
                        </div>
                        <div className='quiz-label-input'>
                            <label for=''>Time</label>
                            <input {...register("assignment")} type='time' className="" />
                        </div>
                    </div>
                    <h1>1 out of 10</h1>
                    
                </div>
                <hr className='w-20px' />
                <div>

                    <form onSubmit={handleSubmit()}>
                        <div className='quiz-body'>
                            <h1>Q.What is your profession?</h1>
                            <div className="quiz-input">
                                <div>
                                    <input {...register("first")} type="checkbox" id='option1' className="radio" value='1' />
                                    <label for='option1'>Student</label>
                                </div>
                                <div>
                                    <input {...register("second")} type="checkbox" id='option2' className="radio" value='1' />
                                    <label for='option1'>Student</label>
                                </div>
                                <div>
                                    <input {...register("third")} type="checkbox" id='option3' className="radio" value='1' />
                                    <label for='option1'>Student</label>
                                </div>
                                <div>
                                    <input {...register("fourth")} type="checkbox" id='option4' className="radio" value='1' />
                                    <label for='option1'>Student</label>
                                </div>
                            </div>
                        </div>
                        <hr className='w-20px' />
                        <div className='quiz-button'>
                            <button>Previous</button>
                            <button>Next</button>
                        </div>

                    </form>
                </div>

            </div>
        </>

    );
};

export default Quiz;