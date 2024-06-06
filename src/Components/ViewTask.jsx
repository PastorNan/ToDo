import React from 'react'
import RemoveTask from './RemoveTask'
import { Link } from 'react-router-dom'

const ViewTask = ({task}) => {

const handleCheckBox = (e)=>{
    // console.log(e.target.checked)
    if (e.target.checked == false)
        console.log("Not Completed")

    const req = new Request(
        'http://localhost:3000/update/', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({completed:false})
    }
    )

    fetch(req)
        .then(res => res.json())
        .then(data => {
            // delete data._id

            console.log(data)
            // setMsg(data)

        })
        .catch(err => console.error(err))

    // navigate("/view")

}
  




    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.task}</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.dueDate}</h5>
            </a>
            
            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p> */}
            {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg> 
            </a> */}
            <div class="flex items-center mb-4">
            {(!task.comp)?(
                 <input id="default-checkbox" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  onChange={handleCheckBox} />
            ):( 
            <input id="default-checkbox" type="checkbox" checked class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  onChange={handleCheckBox} />
            )}
                
                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Completed</label>
            </div>
            <RemoveTask id={task._id}/>
            <Link
            to={"/update/"+ task._id} 
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >Update</Link>
            
        </div>

    )
}

export default ViewTask