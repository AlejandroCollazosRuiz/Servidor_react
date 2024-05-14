import React,{useEffect,useState} from 'react'

const App = () => {

  const [backenData, setBackenData]= useState([{}])

  useEffect(()=>{
    fetch('/api').then(
      response => response.json()
    ).then(
      data => setBackenData(data)
    )
  },[])

  return (
    <div className='container mt-5'>
       <div className='table-responsive'>
            <table className='table table-striped' style={{border:1}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FIRST_NAME</th>
                            <th>LAST_NAME</th>
                            <th>EMAIL</th>
                            <th>GENDER</th>
                        </tr>
                    </thead>
                    {
                      (typeof backenData.users === 'undefined')?
                      (<p>Loading...</p>):
                      (backenData.users.map((user,i)=>
                        <tr key={i}>
                          <td>{user.id}</td>
                          <td>{user.first_name}</td>
                          <td>{user.last_name}</td>
                          <td>{user.email}</td>
                          <td>{user.gender}</td>
                        </tr>
                      ))
                    }
          </table>
      </div>
    </div>
  )
}

export default App
