import React,{useEffect, useState} from "react";
import axios from "axios";

const Cards=()=>{
    const [index,setIndex] =useState(0)
    const [datas,setDatas]=useState([])
    const[selectedItem,setselectedItem]=useState('')
    const [isChecked, setIsChecked] = useState(false);
    const URL="http://localhost:5000"
 
    const handleSelected=((item) =>{
    
        console.log(item)
        setselectedItem(item)
    })

     const handleCompare=(answer) =>{
         if(answer===selectedItem)
         {
             alert('Correct')
             setIndex(index+1)
         }

     }

   const handleOnChange=()=>{
       setIsChecked(!isChecked)
   }
    

    useEffect(()=>{
        axios.get(`${URL}/getQuestions`).then((res)=>{
           setDatas(res.data)
           console.log(res.data.length)
       }).catch((err)=>{
           console.log(err)
       })
        console.log('getting data....')
   },[])
    return(
        <div>
         
                 <>
                    <div class="card" style={{"width": "18rem"}}>
  
                        <div class="card-body">
                            
                            {/* ? --> it contains a value or not it wont throw any error */}
                           { datas[index] ? <>
                            <h5 class="card-title">{datas[index]?.question}</h5>
                            <p class="card-text">
                             <div class="form-check" onClick={()=>handleSelected(datas[index]?.option1)}>
                              <input class="form-check-input" type="checkbox" value={datas[index]?.option1} name="checkbox" checked={isChecked}
          onChange={handleOnChange} id="defaultCheck1"/>
                               <label class="form-check-label" for="defaultCheck1">
                                  {datas[index]?.option1}
                               </label>
                              </div>

                            </p>

                            <p class="card-text">
                             <div class="form-check" onClick={()=>handleSelected(datas[index]?.option2)}>
                             <input class="form-check-input" type="checkbox" value={datas[index]?.option2} name="checkbox" checked={isChecked}
          onChange={handleOnChange} id="defaultCheck1"/>
                               <label class="form-check-label" for="defaultCheck1">
                                  {datas[index]?.option2}
                               </label>
                              </div>

                            </p>

                            <p class="card-text">
                             <div class="form-check" onClick={()=>handleSelected(datas[index]?.option3)}>
                             <input class="form-check-input" type="checkbox" value={datas[index]?.option2} name="checkbox" checked={isChecked}
          onChange={handleOnChange} id="defaultCheck3"/>
                               <label class="form-check-label" for="defaultCheck3">
                                  {datas[index]?.option2}
                               </label>
                              </div>

                            </p>
                             <button href="#" class="btn btn-primary" onClick={()=>handleCompare(datas[index]?.answer)}>Next</button>
                        </>:
                        <>
                         <p className="btn-success">Quiz is completed</p>
                         <button href="#" class="btn btn-primary" onClick={()=>{setIndex(0)}}>Next</button>
                        </>
                        }
                       
                        </div>
                    </div>
                       </>
                   
            
        </div>
    )
}

export default Cards;