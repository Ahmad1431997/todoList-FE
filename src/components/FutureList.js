import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";


const FutureList = (props)=>{
   
    // const taskList = Tasks.map((task)=> {
    //   return  <TaskItem task={task} key={task.id} /> 
    // })
    let data=props.data.map((task)=> <div><TaskItem task={task}/><hr style={{backgroundColor:"black",width:"80%"}}/></div>)
    return(
        <center>
        <div style={{border:"solid 2px black",width:"50%",margin:"20px",boxShadow:"2px 2px 15px blue",
       borderRadius:"10px"}}>
            
           <h3> {props.title}</h3>
           
           {data}
          
        </div>
        </center>
    );
}



export default FutureList;