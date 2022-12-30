import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { doc, collection, getDoc } from 'firebase/firestore';
import { firestore } from '/firebase';
import Title from './Title';

export default function Orders() {
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("userData", user)
  } else {
    console.log("on the server")
  }
  const userCollectionRef = collection(firestore, 'orders');
  const [userOrderData, setUserOrderData] = useState([]);

  useEffect(() => {
    const getOrdersDataFromFB = async () => {
      if (typeof window !== 'undefined') {
        let user;
        if(typeof user == "undefined") {
          console.log("user was undefined, might have been a page refresh");
          user = JSON.parse(localStorage.getItem('user'));
        }
        
        const data = await getDoc(doc(userCollectionRef, user.id));
        console.log("data orders", data.data())
        const dataArray = [];
        for (const timeStamp in data.data()) {
          dataArray.push({ timeStamp, ...data.data()[timeStamp] });
        }
        setUserOrderData(dataArray);
      }

      // dataArray.forEach((data) => rows.push(createData(data)));
      // console.log(rows);
    };
    getOrdersDataFromFB();
  }, []);

  console.log(typeof new Date(userOrderData[0]?.timeStamp / 1000));

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size='medium'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Items</TableCell>
            <TableCell align='right'>Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userOrderData.map((row) => (
            <TableRow key={row.timeStamp}>
              <TableCell>
                {new Date(row.timeStamp / 1).getMonth() + 1}/
                {new Date(row.timeStamp / 1).getDate()}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{JSON.stringify(row.items)}</TableCell>
              <TableCell align='right'>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
