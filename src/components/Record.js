const Record = ({id,jobTitle,statusList,comments}) => {
   
       
    return (
        <tr key={id}>
           <th>{id}</th>
           <td>{jobTitle}</td> 
           <td>{statusList}</td> 
           <td>{comments}</td> 
      </tr>
    );

}
export default Record