import axios from "axios";
const endPoint = "http://localhost:8000/api/" //change to production url on deployment

export async function apiGetService(route){
    return axios.get( endPoint + route )
    .then(responseBody => {
      console.log('response', responseBody);
      if (
        responseBody.status !== 200 
      ) {
        console.log('Something went wrong.');
      }
      return responseBody;
    })
}

export async function apiPostService(route, body){
    return axios.post( endPoint + route, body)
    .then(responseBody => {
      console.log('response', responseBody);
      if (
        responseBody.status !== 200 
      ) {
        console.log('Something went wrong.');
      }
      return responseBody;
    })
}