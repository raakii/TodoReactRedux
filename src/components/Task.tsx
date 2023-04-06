import React, { FC } from "react";
import { Link } from "react-router-dom";
import StyledCol from "../styled/styledCol";
import { StyledRow } from "../styled/styledRow";
import { MdDone, MdDelete, MdModeEditOutline } from 'react-icons/md';

interface TaskProps {
  id: string;
  name: string;
  date: Date;
  isCompleted: boolean;
  onDelete?: () => void;
}

const Task: FC<TaskProps> = ({ id, name, date, isCompleted, onDelete }) => {
    return (
        <StyledRow>
            <StyledCol>{id}</StyledCol>
            <StyledCol>{name}</StyledCol>
            <StyledCol>{date}</StyledCol>
            <StyledCol>{isCompleted ? 
                <MdDone style={{padding:'auto'}} /> : 
                <div> <Link to={'/Modify/' + id} > <MdModeEditOutline/> </Link>  
                <MdDelete onClick={ onDelete} /> </div>}
            </StyledCol>
        </StyledRow>
    )
}

export default Task;