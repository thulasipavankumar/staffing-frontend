import 'bulma/css/bulma.css'
import Record from './Record'
import EmptyRecord from './EmptyRecord'
const Table = ({data}) => {
    const displayTable = () => {
        if (data.length == 0 )
            return <EmptyRecord/>
        
            // for(let property of data ){
            // <thead></thead>
            // }
        data.map(eachRecord=>{
        console.log(`rendering the element ${eachRecord._id.$oid} ${eachRecord.jobTitle}`)
        return <Record id={eachRecord._id.$oid} 
    jobTitle={eachRecord.jobTitle} statusList={eachRecord.statusList} comments={eachRecord.comments}></Record>            
        
    });
         
    }
    return (   
            <tbody className="table">{displayTable()}</tbody>  
    );
}
export default Table