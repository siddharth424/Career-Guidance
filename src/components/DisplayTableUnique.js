import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import './style.css'
import Userdata from './unique.json';

const useStyles = makeStyles({
  th: {
    color: '#ddd',
  },
});


export default function () {
    
  const classes = useStyles();
  return (
        
        <div className="row">
      <div className="col">
        <h3 className='mt-3'>Unique</h3>
        <br/><br/>
         <table >
              <thead>
                <tr>              
                  <th scope="col">Sr. No.</th>
                  <th scope="col">College Name</th>
                  <th scope="col">Entrance exam</th>
                  <th scope="col">Reference link</th>       
                </tr>
              </thead>
              <tbody> 
                {
                    Userdata.map( (users, index)=>(
                    <tr key={index}>                 
                  <th>{ index+1}</th>
                  <td>{ users.name} </td>
                  <td>{ users.email} </td>
                  <td>{ users.phone} </td>                 
                </tr>

                    ))

                }             
                
              
              </tbody>
            </table>
        </div>
        </div>
  );
}
