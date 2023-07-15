import React from 'react'

async function getStudentData() {
  const res = await fetch('https://fakestoreapi.com/users')
  return res.json()
}

export default async function page() {

  const data = await getStudentData();
  console.log(data);
  return (
    <section className="col-6 a_tbdr">
      <h1>Students</h1>

      <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((cv,idx,arr)=>{
              return  <tr>
              <td scope="row">{cv.id}</td>
              <td>{cv.email}</td>
              <td>{cv.username}</td>
              <td>{cv.password}</td>
              <td>{cv.phone}</td>
              <td >
                <button className='btn btn-sm btn-success '>view</button>
                <button className='btn btn-sm btn-primary ms-3 me-3'>Edit</button>
                <button className='btn btn-sm btn-danger'>Delete</button>
              </td>
            </tr>

      })
    }
   
   
  </tbody>
</table>
    </section>
  )
}
