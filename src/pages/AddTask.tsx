import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { TaskState } from "../features/taskSlice";
import { useSaveTaskMutation } from "../services/api/tasks";
import { Task } from "../services/api/tasks/type";
import { StyledButton } from "../styled/styledButton";
import { StyledForm, StyledInput } from "../styled/styledForm";
import { StyledWrapper } from "../styled/StyledWrapper";


interface AddTaskProps {
  initialTask?: TaskState;
}


const AddTask: FC<AddTaskProps> = ({ initialTask}) => {

  const [task, setTask] = useState<Task>(initialTask);
  const [save, { isLoading }] = useSaveTaskMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    save({ ...task })
      .unwrap()
      .then(() => {})
      .catch(() => {});
    setTask({ name: "", date: "" , isCompleted: false });
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit} >
            <h1>Add new Task</h1>
           
            <StyledInput  type="text" name="task" placeholder="thing to do" 
                /> <br/>
         
            <StyledInput  type="date" name="date" placeholder="the date"
                  /><br/>
            <StyledButton primary>Add</StyledButton>
        </StyledForm>
    </StyledWrapper>
  );
}

export default AddTask;
