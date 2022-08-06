import axios from "axios";
import React,{useState} from "react";


const CreateQuestion=()=>{
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

    const handleCreate = async () =>{
      const res = await axios.post('http://localhost:5000/createQuestion',question).then((res)=>{
            console.log(res)
        }).catch((err)=>{
              console.log(err)
        })
        
      
       
        
        
    }
    return(
        <div className="container col-md-6 mx-auto mt-5">
       
  <div className="mb-3">
   
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

 
  <button type="submit" class="btn btn-primary" onClick= {handleCreate}>Create</button>

        </div>
    )
}

export default CreateQuestion;