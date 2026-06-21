import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout

export const metadata = {
  title:{
    default:"Dashboard",
    template:"%s | Dashboard",
  },
  description: "Dashboard page",
};
