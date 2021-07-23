import axios from "axios";
export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK ="UPDATE_TASK";
export const FETCH_TASKS = "FETCH_TASKS";
export const DELETE_TASK = "DELETE_TASK";
export const SWITCH_TASK="SWITCH_TASK"

export const addTask = (task)=> {
    return async(dispatch)=>{
        try {
           const res= await axios.post("http://localhost:8080/tasks",task)
            dispatch({
                type:ADD_TASK,
                payload: {
                    task:res.data,
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    
}}

export const fetchTasks = ()=>{
    return async (dispatch)=>{
    try {
        const res = await axios.get("http://localhost:8080/tasks");
        console.log(res.data)
        dispatch({
            type:FETCH_TASKS,
            payload: res.data,
        })
    } catch (error) {
        console.log(error.message)
    }
    
}}

export const updateTask = (updatedTask) => {
    return async(dispatch)=>{
    try {
        await axios.put(`http://localhost:8080/tasks/${updatedTask.id}`,updatedTask)
        dispatch({
            type: UPDATE_TASK ,
            payload: {
                updatedTask:updatedTask,
            }
        })
    } catch (error) {
        console.log(error.message)
    }

}}


export const deleteTask = (taskId) => {
    return async(dispatch)=>{
    try {
        await axios.delete(`http://localhost:8080/tasks/${taskId}`)
        dispatch({
            type: DELETE_TASK ,
            payload: {
                taskId:taskId,
            }
        })
    } catch (error) {
        console.log(error.message)
    }

}}
export const switchTask = (taskId,task)=>{
    // return async (dispatch) => {
    //     // task = {
    //     //   name: task.name,
    //     //   details: task.details,
    //     //   status: task.status,
    //     //   deadline: task.deadline,
    //     //   priority: task.priority,
    //     // };
    //     try {
    //       if (task.priority === "low") {
    //         task.priority = "middle";
    //       } else if (task.priority === "middle") {
    //         task.priority = "high";
    //       } else if (task.priority === "high") {
    //         task.priority = "low";
    //       }
    //       console.log('the task', task, taskId);
    //       const res = await axios.put(` http://localhost:8080/tasks/${taskId}`,task);
    //       dispatch({
    //         type: SWITCH_TASK,
    //         payload: { task: res.data },
    //       });
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    return async (dispatch) => {
        task = {
          name: task.name,
          details: task.details,
          status: !task.status,
          deadline: task.deadline,
        
          priority: task.priority,
        };
        try {
          const res = await axios.put(
            `http://localhost:8080/tasks/${taskId}`,
            task
          );
          dispatch({
            type: SWITCH_TASK,
            payload: { taskId,task },
          });
          console.log(task)
        } catch (error) {
          console.log(error);
        }
      };
    };
    

