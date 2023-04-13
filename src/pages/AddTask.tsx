import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSaveTaskMutation } from "../services/api/tasks";
import { task } from "../services/api/tasks/type";
import { StyledButton } from "../styled/styledButton";
import { StyledForm, StyledInput } from "../styled/styledForm";
import { StyledWrapper } from "../styled/StyledWrapper";
import {v4 as uuidv4} from 'uuid'



interface AddTaskProps {
  initialTask?: task;
}

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const AddTask: FC<AddTaskProps> = ({ initialTask = { id: "", name: "", date: "", isCompleted: false }}) => {

    const [task, setTask] = useState<task>(initialTask);
    const [save, { isLoading }] = useSaveTaskMutation();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setTask((prevTask) => ({ ...prevTask, [name]: value }));
  
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    save({ ...task})
      .unwrap()
      .then(() => {})
      .catch(() => {});
    setTask({ id: uuidv4(), name: "" , date: date , isCompleted: false });
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit} >
            <h1>Add new Task</h1>
           
            <StyledInput  type="text" name="name" placeholder="thing to do" onChange={handleInputChange}
                /> <br/>
         
            <StyledInput  type="date" name="date" onChange={handleInputChange} placeholder="the date"
                  /><br/>
            <StyledButton primary> {isLoading ? "Loading..." : "Add"} </StyledButton>

        </StyledForm>
        <Link to={"/"}> <StyledButton > Home </StyledButton> </Link>
    </StyledWrapper>
  );
}

export default AddTask;
