const Service = {
    getLaunchData: async () => {
      try {
        var response = await fetch('http://localhost:8080/'); //place link reagarding backend data  
       const data=await response.json();
       
        return data;
      } catch (error) {
        console.error('Error fetching  data:', error);
        throw error;
      }
    },
  };
  
  export default Service;
  