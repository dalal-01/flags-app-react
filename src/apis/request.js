
const request = async (url) => {
  try {
    let response=await fetch(url);
    if(response.status===200)
    return response.json();
  else return [] 
  } catch (error) {
    console.log(error);
  }
};

export default request;

