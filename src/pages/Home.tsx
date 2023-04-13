
import { Link } from 'react-router-dom';
import Head from '../components/Head';
import Task from '../components/Task';
import { useDeleteTaskMutation, useGetAllTasksQuery } from '../services/api/tasks';
import { task } from '../services/api/tasks/type';
import { StyledButton } from '../styled/styledButton';
import { StyledWrapper } from '../styled/StyledWrapper';



const Home = () => {

    const { data: tasks = [], isLoading } = useGetAllTasksQuery();

    const toDos = tasks.filter((todo) => todo.isCompleted == false );
    const done = tasks.filter((todo) => todo.isCompleted == true );


    if (isLoading) return <div>Loading...</div>;

  return (
    <StyledWrapper>
        <Head/>
        {toDos.map(item => {
                    return (
                        <Task 
                        name ={item.name}
                        date={item.date}
                        isCompleted={item.isCompleted}
                        id={item.id}
                        key={item.id}
                      
                        />
                        
                    )
                })}
                <h2 style={{margin:'auto', marginTop: '30px'}} >Marked as Done</h2>
                {done.map(item => {
                    return (
                        <span style={{textDecoration: 'line-through'}}>
                          <Task 
                        name ={item.name}
                        date={item.date}
                        isCompleted={item.isCompleted}
                        id={item.id}
                        key={item.id}
                      
                        />
                        </span>
                        
                    )
                })}
        <br/><Link to={"/addTask"} ><StyledButton primary >Add new Task</StyledButton></Link><br/>

    </StyledWrapper>
  );
}

export default Home;
