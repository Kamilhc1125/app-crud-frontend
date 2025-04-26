import React, { useState, useEffect } from "react";
import axios from "axios";

const Data = () => {

  const [list, setList] = useState([]);

  const BASE_URL = "http://localhost:5006/api/stock";

  const [data, setData] = useState({
    symbol: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const getData = () => {
    axios.get(BASE_URL, {
      mode: 'no-cors'
    }).then((response) => {
      setList(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const userData = {
      symbol: data.symbol
    };

    axios.post(BASE_URL, userData).then((response) => {
      console.log(response.status, response.data).then(getData());
    });
  }

  const handleDelete = (e) => {

    e.preventDefault();

    console.log(e.currentTarget.id);

    const id = e.currentTarget.id;

    axios.delete(`${BASE_URL}/${id}`).then((response) => {
      console.log(response.status, response.data);
    }).then(getData());

  }

  const handleUpdate = (e) => {

  }

  return (
    <div className="container mx-auto my-5">


      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">ASP.NET API</h1>
      <button onClick={() => getData()} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Get Data</button>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list && list.map((item, index) => {
              return (
                <tr key={index} className="hover">
                  <td>{item.id}</td>
                  <td>{item.symbol}</td>
                  <td><button id={item.id} onClick={handleDelete} className="btn">Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <hr className="my-6" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="symbol">
          Symbol
          <input
            type="text"
            name="symbol"
            value={data.symbol}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
            placeholder="Type here"
          />
        </label>
        <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add data</button> 
      </form>

      <hr className="my-6" />

      <form onSubmit={handleUpdate}>
        <label htmlFor="symbol">
          Symbol
          <input
            type="text"
            name="symbol"
            value={data.symbol}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
            placeholder="Type here"
          />
        </label>
        <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Update data</button>

    
        <button className="btn btn-primary">Primary</button>
 
      </form>
    </div>

  )
}

export default Data;
