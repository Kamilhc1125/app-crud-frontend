// fetchData({
//   url: `/product/${id}`,
//   method: "GET",
// }).then(
//   console.log('effec', response)
// ).then(
//   setProduct(response),
//   console.log(response)
// )


// const categoryUrl = import.meta.env.VITE_API_CATEGORY_BASE_URL;

// const {data, isLoading } = useFetchData(categoryUrl);

{/* <label className="form-control w-full max-w-xs mb-4">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              className="select select-bordered"
              value={response.categoryId}
              id="categoryId"
              onChange={handleChangeInputValue}
            >
              {data && data.map((item, index) => {

                const { id, name } = item;

                return (
                  <option key={index} value={id}>{name}</option>
                )
              })}
            </select>
          </label> */} {/* <label className="form-control w-full max-w-xs mb-4">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              className="select select-bordered"
              value={response.categoryId}
              id="categoryId"
              onChange={handleChangeInputValue}
            >
              {data && data.map((item, index) => {

                const { id, name } = item;

                return (
                  <option key={index} value={id}>{name}</option>
                )
              })}
            </select>
          </label> */}

{ loading && <p>Loading...</p> }
{/* <button onClick={fetchProducts}>Fetch</button> */ }
{
  response && (
    <pre style={{ textAlign: "left" }}>
      {JSON.stringify(response, null, 2)}
    </pre>
  )
}

// const handleChangeInputValue = (e) => {

//   setProduct({
//     ...response,
//     [e.target.id]: e.target.value
//   });
// };
