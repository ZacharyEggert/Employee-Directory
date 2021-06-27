import axios from "axios";

const getRandomEmployee = () => {
    const response = axios.get('https://randomuser.me/api/?nat=us,ca,de', 
    {responseType:'json', headers: {"Access-Control-Allow-Origin": "*"}})

    const data = response.data.results;
    console.log(data);
    return data
}

const getRandomEmployeeSet = () => {
    return axios.get('https://randomuser.me/api/?results=50&nat=us,ca,de', 
    {responseType:'json', headers: {"Access-Control-Allow-Origin": "*"}})
    .then(response => response.data.results)
    .then(array => {
        return array
    })
}

window.Employees = getRandomEmployeeSet;

export {getRandomEmployee, getRandomEmployeeSet}