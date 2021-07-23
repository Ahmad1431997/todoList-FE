import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTask, updateTask, switchTask } from "../store/actions";
import { BsFillXSquareFill, BsApp } from "react-icons/bs";
import Moment from "react-moment";
import { useState } from "react";

const TaskItem = (props) => {
  const Tasks = useSelector((state) => state.Tasks);
  // const finished = new Date(props.task.deadline) < new Date() || props.task.status === true

  //   const today =
  //       new Date(props.task.deadline) > new Date() &&
  //       props.task.status === false &&
  //       new Date(props.task.deadline).getDate() < new Date().getDate() + 1

  //   const future =
  //       new Date(props.task.deadline).getDate() > new Date().getDate() + 1 &&
  //       props.task.status === false

  //   const finishTask=()=>{
  //       if (finished){
  //           console.log("i'm here")
  //         return <div>
  //             <h2>{props.task.name}</h2>
  //             <BsFillXSquareFill onClick={handleDelete} ></BsFillXSquareFill>
  //           </div>
  //       }
  //   }
  //   const futureTask=()=>{
  //       if(future){
  //       return ( <div>
  //         <h2>{props.task.name}</h2>
  //         <button onClick={handleClick} >{props.task.priority}</button>
  //         <BsFillXSquareFill onClick={handleDelete} ></BsFillXSquareFill>
  //         <Moment from={new Date()}>{props.task.deadline}</Moment>
  //         </div>)
  //         }
  //   }
  //   console.log(props.task.name)

  const date = new Date();
  console.log(date);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (props.priority === "low") {
      dispatch(updateTask({ ...props.task, priority: "middle" }));
    } else if (props.task.priority === "middle") {
      dispatch(updateTask({ ...props.task, priority: "high" }));
    } else if (props.task.priority === "high") {
      dispatch(updateTask({ ...props.task, priority: "low" }));
    } else {
      dispatch(updateTask({ ...props.task, priority: "middle" }));
    }
  };
  //   const [toggle , setToggle]=useState(props.task.status);
  const handleSwitch = () => {
    const task = Tasks.find((task) => task.id === props.task.id);
    dispatch(switchTask(props.task.id, task));
  };
  const handleDelete = () => {
    dispatch(deleteTask(props.task.id));
  };
  const checkDate = ()=>{
    if (new Date(props.task.deadline) < new Date()){
      return(<div style={{ backgroundColor: "#eee", width: "80%", padding: "10px" }}>
      <div style={{ fontSize: "18pt" }}>
     
        {props.task.name} 
      </div>
      <br />
      <i>{props.task.details}</i>
      <br />
      <br />

     

      <Moment from={new Date()} style={{ color: "darkcyan" }}>
        {props.task.deadline}
      </Moment>
      <br />
      <br />
    </div>);
    }else{
      return(<div style={{ backgroundColor: "#eee", width: "80%", padding: "10px" }}>
      <div style={{ fontSize: "18pt" }}>
        
      {props.task.name} <BsFillXSquareFill onClick={handleDelete}></BsFillXSquareFill>
        
       
      </div>
      <br />
      <i>{props.task.details}</i>
      <br />
      <br />

      {/* <p>{props.task.deadline}</p> */}

      {/* <BsFillXSquareFill onClick={handleDelete} ></BsFillXSquareFill> */}

      <Moment from={new Date()} style={{ color: "darkcyan" }}>
        {props.task.deadline}
      </Moment>
      <br />
      <button className="btn btn-info" onClick={handleClick}>
        {props.task.priority}
      </button>
      <br />

      <BsApp onClick={handleSwitch}></BsApp>
    </div>);
    }
  }
  return (
    // <div style={{ backgroundColor: "#eee", width: "80%", padding: "10px" }}>
    //   <div style={{ fontSize: "18pt" }}>
    //     {!props.task.status === true ? (
    //       ""
    //     ) : (
    //       <BsFillXSquareFill onClick={handleDelete}></BsFillXSquareFill>
    //     )}
    //     {props.task.name}
    //   </div>
    //   <br />
    //   <i>{props.task.details}</i>
    //   <br />
    //   <br />

    //   {/* <p>{props.task.deadline}</p> */}

    //   {/* <BsFillXSquareFill onClick={handleDelete} ></BsFillXSquareFill> */}

    //   <Moment from={new Date()} style={{ color: "darkcyan" }}>
    //     {props.task.deadline}
    //   </Moment>
    //   <br />
    //   <button className="btn btn-info" onClick={handleClick}>
    //     {props.task.priority}
    //   </button>
    //   <br />

    //   <BsApp onClick={handleSwitch}></BsApp>
    // </div>
   <div> {checkDate()}</div>
  );
};

export default TaskItem;
