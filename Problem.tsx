import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Problem() {
      const {pid}=useParams();
     interface Problem {
        "id": number;
        "title": string;
        "level": string;
        "Description": string;
        "AskedIn":String [];
        "topic":String [];
         "submissions":number;
      }

     const [problem,setProblem]=useState<Problem>({
        "id": 0,
        "title":'',
        "level":'',
        "Description":'',
        "AskedIn":[],
        "topic":[],
        "submissions":0,
     });
      const fetchProblem=async()=>{
          try {
            const response = await axios.get(`http://localhost:4000/problems/${pid}`);
             setProblem(response.data);
          } catch (error) {
               setProblem({
                "id": 0,
                "title":'',
                "level":'',
                "Description":'',
                "AskedIn":[],
                "topic":[],
                "submissions":0,
             })
          }
      }
      useEffect(()=>{
         fetchProblem();
      })
  return (
             <div className='bg-white '>

              <div className=''>
               {problem.Description}
              </div>

             </div>     
  )
}

export default Problem
