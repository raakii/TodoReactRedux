import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useGetTaskByIdQuery, useSaveTaskMutation, useUpdateTaskMutation } from "../services/api/tasks";
import { task } from "../services/api/tasks/type";
import { StyledButton } from "../styled/styledButton";
import { StyledForm, StyledInput } from "../styled/styledForm";
import { StyledWrapper } from "../styled/StyledWrapper";
import {v4 as uuidv4} from 'uuid'



  const UpdateTask: FC = () => {

    const { id: taskId = "" } = useParams();

    const { data: task, isLoading } = useGetTaskByIdQuery(taskId);
    const [update, { isLoading: isLoadingMutation }] = useUpdateTaskMutation();

    const [name, setName] = useState(task?.name || "");
  const [date, setDate] = useState(task?.date || "");
  const [isCompleted, setIsCompleted] = useState(task?.isCompleted || false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDate(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCompleted(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedTask = {
      id: taskId,
      name: name,
      date,
      isCompleted,
    };

    update(updatedTask)
      .unwrap()
      .then(() => {})
      .catch(() => {});
  };
    

  useEffect(() => {
    if (task) {
      setName(task?.name);
      setDate(task?.date);
      setIsCompleted(task?.isCompleted);
    }
  }, [task]);

  if (isLoading) return <div>Loading</div>;

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit} >
            <h1>Add new Task</h1>
           
            <StyledInput  type="text" name="name" value={name} onChange={handleNameChange}
                /> <br/>
         
            <StyledInput  type="date" name="date" onChange={handleDateChange} value={date}
                  /><br/>
            <StyledButton primary> {isLoading ? "Loading..." : "Update"} </StyledButton>

        </StyledForm>
        <Link to={"/"}> <StyledButton > Home </StyledButton> </Link>
    </StyledWrapper>
  );
}

export default UpdateTask;
