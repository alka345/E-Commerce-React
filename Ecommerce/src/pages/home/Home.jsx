import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/MyContext'


function Home() {
  const context = useContext(MyContext)
  console.log(context);
  const {name} = context
  console.log(name);
  return (
    <Layout>
      <h1>Name : {name} </h1>
    </Layout>
  )
}

export default Home
