import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export function Student(){
    const [student, setStudent] = useState()
    const classes = useStyles()
    
    useEffect(()=>{
        fetch(`http://localhost:3001/student`)
        .then(res => res.json())
        .then(students => setStudent(students))    
    }, [])

    return (
        <div> 
          {student && student.length === 0 ? (
        <div>
          <h4>
            {' '}
            No hay estudiantes para mostrar
          </h4>
        </div>
      ) : (
        <div className={classes.paper} >
          <h3>Alumnos</h3>
          <ListItemText primary={'Nombre' + ' ' + 'Apellido' + ' ' + 'Cohorte'} />
          {student &&
            student.map(u => (
            <div key={u.id} > 
            <ListItem button>
            <ListItemText primary={u.name + " " + u.lastName + " " + u.cohortId} />
            </ListItem>
            </div>
            ))}
            </div>)}
      </div>
    )
}
    
export default connect(null, {})(Student)