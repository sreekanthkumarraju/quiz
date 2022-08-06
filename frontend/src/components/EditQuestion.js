import React,{useEffect, useState} from "react";
import axios from "axios";

const EditQuestion=()=>{


   const URL="http://localhost:5000"
   const [datas,setDatas]=useState([])
   const [counter,setCounter]=useState(0)
   const [selected,setSelected]=useState('')
    const[question,setQuestion]=useState({
       
        question:"",
        option1:"",
        option2:"",
        option3:"",
        answer:""
 
 })
 
     const handleChange=(event)=>{
         const name=event.target.name;
         const value=event.target.value
         console.log({
             'name':name,
             'value':value
         })
         setQuestion((prevState)=>({
                 ...prevState,
                 [name]:value
         }))
       
     }

     const handleUpdate= async (id)=>{
         console.log(id)
         const isUpdated=await axios.put(`${URL}/updateQuestion/${id}`,question).then((res)=>{
           console.log(res);
           setCounter(counter+1)
         }).catch((err)=>{
             console.log(err)
         })
         console.log(isUpdated)
     }

     const handleDelete= async (id)=>{
        console.log(id)
        const isDeleted=await axios.delete(`${URL}/deleteQuestion/${id}`).then((res)=>{
          console.log(res);
          setCounter(counter+1)
        }).catch((err)=>{
            console.log(err)
        })
        console.log(isDeleted)
    }


     const handleSelector= async (item) =>{
       await axios.get(`${URL}/getQuestion/${item}`).then((res)=>{
             setQuestion({

                question:res.data.question,
                option1:res.data.option1,
                option2:res.data.option2,
                option3:res.data.option3,
                answer:res.data.answer

             })
             
             setSelected(item)

         }).catch((err)=>{
               console.log(err)
         })
     }

     useEffect(()=>{
          axios.get(`${URL}/getQuestions`).then((res)=>{
             setDatas(res.data)
         }).catch((err)=>{
             console.log(err)
         })
          console.log('getting data....')
     },[counter])

    return(
        <div className="container d-flex mt-5 mb-2">

            <div className="col-md-6">
            <ul class="list-group">
                {
                    datas?.map((item)=>{
                        return(
                            <div className="d-flex">
                         <li className="list-group-item">{item.question}
                           <a className="btn btn-outline-warning" onClick={()=>handleSelector(item._id)}>Edit</a>
                           <a className="btn btn-outline-warning" onClick={()=>handleDelete(item._id)}>Delete</a>
                         </li>
                            </div>
                        )
                    })
                }             
                </ul>

            </div>

            <div className="col-md-6">

            <div className="container mx-auto ">
            <div className="mb-2">
   
   <input type="text" className="form-control" id="question" name="question" value={question.question} placeholder="Enter Question"  onChange={handleChange}/>   
 </div>

 <div className="mb-3">
   <input type="text" className="form-control" id="option1" name="option1"  value={question.option1} placeholder="Enter option1" onChange={handleChange}/>
 </div>
 <div className="mb-3">
   <input type="text" className="form-control" id="option2" name="option2" value={question.option2} placeholder="Enter option2" onChange={handleChange}/>
 </div>
 <div className="mb-3">
   <input type="text" className="form-control" id="option3" name="option3" value={question.option3} placeholder="Enter option3" onChange={handleChange}/>
 </div>
 <div className="mb-3">
   <input type="text" className="form-control" id="answer" name="answer" value={question.answer} placeholder="Enter Answer" onChange={handleChange}/>
 </div>


 <button type="submit" class="btn btn-primary" onClick= {()=>handleUpdate(selected)}>Update</button>


            </div>
            </div>
           
        </div>
    )
}

export default EditQuestion;