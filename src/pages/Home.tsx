
import { Link } from 'react-router-dom';
import Head from '../components/Head';
import Task from '../components/Task';
import { useGetAllTasksQuery } from '../services/api/tasks';
import { StyledButton } from '../styled/styledButton';
import { StyledWrapper } from '../styled/StyledWrapper';



const Home = () => {

    const { data: tasks = [], isLoading } = useGetAllTasksQuery();
    

    if (isLoading) return <div>Loading...</div>;

  return (
    <StyledWrapper>
        <Head/>
        {tasks.map(item => {
                    return (
                        <Task 
                        name ={item.name}
                        date={item.date}
                        isCompleted={false}
                        id={item.id}
                        key={item.id}
                      
                        />
                        
                    )
                })}
        <br/><Link to={"/addTask"} ><StyledButton primary >Add new Task</StyledButton></Link><br/>

    </StyledWrapper>
  );
}

export default Home;
