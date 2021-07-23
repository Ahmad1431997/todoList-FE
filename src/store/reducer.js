import { ADD_TASK, UPDATE_TASK, FETCH_TASKS, DELETE_TASK,SWITCH_TASK } from "./actions";
const initialState = {
    Tasks: [],
  };



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            // action.payload.product.slug = slugify(action.payload.product.name);
            return {
              ...state,
              Tasks: [...state.Tasks, action.payload.task],
            };

            case FETCH_TASKS:
                return {
                  ...state,
                  Tasks: action.payload,
                };
                case UPDATE_TASK:
                    const { updatedTask} = action.payload;
                    return {
                      ...state,
                      Tasks: state.Tasks.map((task) =>
                        task.id === updatedTask.id ? updatedTask : task
                      ),
                    };
                    case DELETE_TASK:
                        const taskToKeep = state.Tasks.filter(
                          (task) => task.id !== action.payload.taskId
                        );
                        return {
                          ...state,
                         Tasks: taskToKeep,
                        };
                        case SWITCH_TASK:
                       
                        const taskToSwitch = state.Tasks.find(
                            (task) => task.id === action.payload.taskId
                          );
                          taskToSwitch.status = !taskToSwitch.status;
                          const newTasks = state.Tasks.map((task) =>
                            task.id !== action.payload.taskId ? task :taskToSwitch
                          );
                          return {
                            ...state,
                            Tasks: newTasks,
                          };
                          
                           //     const newTasks = state.Tasks.map((task) =>
                        //     task.id !== action.payload.task.id ? task : action.payload.task
                        //   );
                        //   return {
                        //     ...state,
                        //     tasks: newTasks,
                        //   };
        default:
            return state;
    }}






    export default reducer;