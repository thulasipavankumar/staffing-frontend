import axios from 'axios'
//https://reqres.in/api/users/100
//https://raw.githubusercontent.com/thulasipavankumar/ReactApp_learning/dump/src/data.json
const getTableData = async (queryString) => {
  const response = await axios.get('https://raw.githubusercontent.com/thulasipavankumar/ReactApp_learning/dump/src/data.json',{
        headers:{
          "Content-Type": "application/json"
        }

    })
    console.log(response)
    return response.data;
}
export default getTableData;