import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Problems() {
  interface Problem {
     "id": number;
     "title": string;
    "level": string;
    "Description": string;
    "AskedIn":String [];
    "topic":String [];
     "submissions":number;
  }
 const navigate=useNavigate();
  const [problems, setProblems] = useState<Problem[]>([]);

  const fetchProblems = async () => {
    try {
      const response = await axios.get("http://localhost:4000/problems");
      setProblems(response.data);
    } catch (error) {
      setProblems([]);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProblems();
  }, []);
  
    return (
      <div className="min-h-screen bg-gray-100"> 
        <div className="container mx-auto px-4 py-8"> 
          <table className="w-full table-auto border border-gray-300"> 
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-200 p-2 text-white border-opacity-50">ProblemId</th>
                <th className="border border-gray-200 p-2 text-white border-opacity-50">Title</th>
                <th className="border border-gray-200 p-2 text-white border-opacity-50">Difficulty</th>
                <th className="border border-gray-200 p-2 text-white border-opacity-50">Submissions</th>
                <th className="border border-gray-200 p-2 text-white border-opacity-50">Topic</th>
                <th className="border border-gray-200 p-2 text-white border-opacity-50">Asked In</th>
              </tr>
            </thead>
            <tbody>
              {problems &&
                problems.map((pr, ind) => {
                  const levelClass = pr.level === "Easy" ? 'text-green-600' :
                                     pr.level === "Medium" ? 'text-orange-400' :
                                     'text-red-400';
                  return (
                    <tr key={ind} className={ind % 2 === 0 ? "" : "bg-gray-100"}>
                      <td className="border border-gray-200 p-2 text-center text-gray-500">{pr.id}</td>
                      <td className="border border-gray-200 p-2 text-center text-gray-500"> 
                        <Link to={`/problem/${pr.id}`}>{pr.title}</Link> 
                      </td>
                      <td className={`border border-gray-200 text-center ${levelClass}`} >{pr.level}</td>
                      <td className={`border border-gray-200 text-center text-gray-500`} >{pr.submissions}</td>
                      <td className="border border-gray-200 p-2 text-center text-gray-500">
                        {
                          pr.topic.map((val,index)=>{
                            return (
                              <span key={index} className="inline-block p-1 mr-1 rounded-lg bg-slate-200 text-sm">{val}</span>
                            )
                          })
                        }
                      </td>
                      <td className="border border-gray-200 p-2 text-center text-gray-500">
                        {
                          pr.AskedIn.map((val,index)=>{
                            return (
                              <span key={index} className="inline-block p-1 mr-1 rounded-lg bg-slate-200 text-sm">{val}</span>
                            )
                          })
                        }
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Problems;
