import React, { FC } from "react";
import { Link } from "react-router-dom";
import StyledCol from "../styled/styledCol";
import { StyledRow } from "../styled/styledRow";
import { MdDone, MdDelete, MdModeEditOutline, MdOutlineRemoveDone } from 'react-icons/md';
import { task } from "../services/api/tasks/type";
import { useDeleteTaskMutation, useUpdateTaskMutation } from "../services/api/tasks";

interface TaskProps {
  id: string;
  name: string;
  date: string;
  isCompleted: boolean;
 
}

const Task: FC<TaskProps> = ({ id, name, date, isCompleted }) => {

    const [update, { isLoading: isLoadingMutation }] = useUpdateTaskMutation();

    const markAsDone = () => {
        const updatedTask = {
            id: id,
            name: name,
            date: date,
            isCompleted: !isCompleted,
          };
      
          update(updatedTask)
            .unwrap()
            .then(() => {})
            .catch(() => {});
        };

    

    const [deletePost, response] = useDeleteTaskMutation();

    return (
        <StyledRow>
            
            <StyledCol>{name}</StyledCol>
            <StyledCol>{date}</StyledCol>
            <StyledCol>{isCompleted ? 
                <MdOutlineRemoveDone onClick={markAsDone} /> : 
                <div> <Link to={'/update/' + id} > <MdModeEditOutline/> </Link>  
                <MdDelete style={{paddingLeft:'20px', paddingRight:'20px'}} 
                onClick={() => deletePost(id)} /> <MdDone onClick={markAsDone}  /> </div>}
            </StyledCol>

        </StyledRow>
    )
}

export default Task;