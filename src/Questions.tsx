function Questions({category, title, description}) {
  return (
   
    <div className="card" >

        <div className="top">
            <p>{category}</p>
        </div>


        <div className="bottom">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>

  );
}

export default Questions