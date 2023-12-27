const request = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Request failed'); 
    }
  } catch (error) {
    throw new Error('Request failed');
  }
};

export default request;

