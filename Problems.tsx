import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Problems() {
     interface Problem {
               id:number,
               title:string,
               level:string,
               Description:string
      }

      const [problems,setProblems]=useState<Problem[]>([]);

       const fetchProblems=async()=>{
        try {
          const response=await axios.get("http://localhost:4000/problems");
           setProblems(response.data);
       } catch (error) {
            setProblems([]);
             console.log(error);
       }
       }
       useEffect(()=>{
               fetchProblems();
       },[]);
  return (
       <table>
          <thead>
             <tr>
               <th>ProblemId</th>
               <th>Title</th>
               <th>Difficulty</th>
               
             </tr>
          </thead>
           <tbody>
             {
             problems.length>0 &&    problems.map((pr)=>{
                   return (
                     <tr  key={pr.id}>
                       <td>{pr.id}</td>
                       <td>{pr.title}</td>
                       <td>{pr.level}</td>

                     </tr>
                   )
                })
             }
           </tbody>
       </table>
  )
}

export default Problems
