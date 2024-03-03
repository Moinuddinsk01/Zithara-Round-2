// components/LandingPage.js
import React, { useEffect, useState } from 'react';
import Service from '../service';
import TableComponent from '../components/TableComponent';
import { Spinner,Center } from '@chakra-ui/react'

const LandingPage = () => {

  let datax;
  // use this when backend is available 
   const [launchData , setLaunchData] = useState([]);
   
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Service.getLaunchData();
        setLaunchData(data);

      } catch (error) {
        // Handle error
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    
    { Header: 'S NO', accessor: 'sno' },
    { Header: 'Name ', accessor: 'customer_name' },
    { Header: 'Age', accessor: 'age' },
     { Header: 'Phone', accessor: 'phone' },
     { Header: 'Location ', accessor: 'location' },
     { Header:  'Date  \u00A0 \u00A0 \u00A0 \u00A0 \u00A0  \u00A0 \u00A0 \u00A0  Time', accessor: 'created_at' },
       
    

   
  ];

  return (
    <div>
      
     {launchData.length > 0 ?  <TableComponent data={launchData} columns={columns} />
     :
     <Center paddingTop={5}>
     <Spinner 
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
</Center>
 } 
    </div>
  );
};

export default LandingPage;
