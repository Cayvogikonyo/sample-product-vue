import axios from "axios";
const endPoint = "https://sample.dev.thebrainerke.co.ke/api/" //change to production url on deployment

//Authorization errors are handled here using interceptors, if invalid, inititate request token and save to local Storage/cookie


export async function apiGetService(route){
    return axios.get( endPoint + route )
    .then(responseBody => {
      console.log('json', responseBody);
      if (
        responseBody.status === 401 
      ) {
        console.log('Something went wrong.');
      }
      return responseBody;
    })
}

export async function apiPostService(route, body){
    return axios.post( endPoint + route, body)
    .then(responseBody => {
      if (
        responseBody.status === 401 
      ) {
        console.log('Something went wrong.');
      }
      return responseBody;
    })
}