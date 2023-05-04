import React from 'react';
import img1 from '../Assignment/images/task.png';


const Assignment = () => {
    return (
        <div className='p-10 rounded'>
            <div className='main-part'>
                <div className='heading-photo'>
                    <h1>ASSIGNMENT</h1>
                    <img src={img1} className='task-photo' />
                </div>
                <div className='add-submit'>
                    <input type='file' id='file' className='inputfile' />
                    <label for='file'>Choose file</label>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Assignment;