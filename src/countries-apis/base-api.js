const request = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return [];
    }
  };
  export { request };
  