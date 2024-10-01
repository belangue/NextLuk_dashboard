import React from 'react'
import ReactBigCalendar from './Calander/Calendar'
import { useLoaderData } from 'react-router-dom';

function Schedule() {
  const loaderData = useLoaderData()
  console.log("loaderData", loaderData);
  return (
    <ReactBigCalendar appointment={loaderData.appointment} />
  )
}

export default Schedule
export const getAllAppoitment = async ({ params }) => {
  let response = await fetch(`${process.env.REACT_APP_DEV_URL}/appointment/getAllAppoinmtent`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'access-control': '*',
      'authorization': 'Bearer ' + localStorage.getItem('nextluk_token'),
    },
  })
  if (!response.ok) {
    throw ('An error occurred');
  }
  // return { users: [] };
  return await response.json();
}