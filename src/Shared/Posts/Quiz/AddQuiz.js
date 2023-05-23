import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { VscAdd } from 'react-icons/vsc'
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const AddQuiz = () => {
  const { courseID } = useParams();
  const {user} = useContext(AuthContext);
  const [questions, setQuestions] = useState([]);
  const { register, handleSubmit } = useForm();


  // function to add two new input fields to the form
  function addFields() {
    setQuestions([...questions, { question: "", answer: "", options: [] }]);
  }

  // function to update the value of a question or answer input field
  function updateField(index, field, value) {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  }

  // function to add a new option to a question
  function addOption(index) {
    const newQuestions = [...questions];
    newQuestions[index].options.push("");
    setQuestions(newQuestions);
  }

  // function to update the value of an option input field
  function updateOption(questionIndex, optionIndex, value) {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  }

  // function to handle form submission
  const handlePost = (data) => {
    const quiz = {
      email: user?.email,
      type: 'quiz',
      title: data.title,
      description: data.description,
      questions: questions,
      date: data.date,
      time: data.time,
      courseID: courseID,
    }

    fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quiz)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('User Created');
            })
  }

  return (
    <div className='p-5'>
      <div className="addquiz-heading">
        <p className=" ">PREPARE YOUR ASSESSMENT</p>
      </div>
      <div className="addquiz-body">
        <form onSubmit={handleSubmit(handlePost)}>
          <div className='addquiz-firstsec'>
           <div>
           <div className='addquiz-label-input'>
              <label for='' className='addquiz-label'>Title</label>
              <input {...register("title")} type='text' className="" />
            </div>
            <div className='addquiz-label-input'>
              <label for=''>Descripton</label>
              <input {...register("description")} type='text'  className="" />
            </div>
           </div>
           <div>
           <div className='addquiz-label-input'>
              <label for=''>Date</label>
              <input {...register("date")} type='date'  className="" />
            </div>
            <div className='addquiz-label-input'>
              <label for=''>Time</label>
              <input {...register("time")} type='time'  className="" />
            </div>
           </div>
          </div>
          <hr className='w-20px' />
          <div className="flex flex-row justify-start px-5  text-xl font-bold">
            <button type="button" onClick={addFields} className=''>
              Add Fields
            </button>
            <div className="p-5">
              <button><VscAdd onClick={addFields}></VscAdd></button>
            </div>

          </div>
          <div className="divide-y-2">
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className='flex flex-row'>
                <div>
                  <label className="flex flex-row justify-start p-5 gap-5 addquiz-label">
                    Enter Your Question<br />
                    <input
                      type="text" className="rounded addquiz-input"
                      value={question.question}
                      onChange={(event) =>
                        updateField(questionIndex, "question", event.target.value)
                      }
                    />
                  </label>
                  <label className="flex flex-row justify-start p-5 gap-5 addquiz-label">
                    Enter Your Answer
                    <input
                      type="text" className="rounded addquiz-input"
                      value={question.answer}
                      onChange={(event) =>
                        updateField(questionIndex, "answer", event.target.value)
                      }
                    />
                  </label>
                </div>


                <div>
                  <div className="px-5 py-3">
                    <button type="button" onClick={() => addOption(questionIndex)} className="flex flex-row justify-start p-2 rounded text-white addquiz-btn">
                      Enter Your Options
                    </button>
                  </div>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <label className="flex flex-row justify-start px-5 py-2 gap-5 addquiz-label">
                        Option {optionIndex + 1}
                        <input
                          type="text" className="rounded addquiz-input"
                          value={option}
                          onChange={(event) =>
                            updateOption(
                              questionIndex,
                              optionIndex,
                              event.target.value
                            )
                          }
                        />
                      </label>
                    </div>

                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-start p-5">
            <button type="submit" className="flex flex-row justify-start p-2 rounded addquiz-btn text-white">Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddQuiz;