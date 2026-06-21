import React from 'react'


export async function generateMetadata({params}) {
  const {userId} = await params;
  return {
    title: {
      absolute: `User ${userId}`,
    },
    description: `User ${userId} page`,
  };
}

const UserPage = async ({params}) => {
  const {userId} = await params;
  return (
    <div>UserPage {userId}</div>
  )
}

export default UserPage