const Accorrdion = ({ data }) => {

  return (
    <div className="join join-vertical bg-base-100 round-shadow">

      {data.map((item, index) => {

        const { id, question, answer } = item; 

        return (
          <div className="collapse collapse-arrow join-item border-base-300 border" key={id}>
            <input type="radio" name="my-accordion-4" id={index} defaultChecked={index == 0 ? true : false} />
            <div className="collapse-title font-semibold">{question}</div>
            <div className="collapse-content text-sm">{answer}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Accorrdion;
