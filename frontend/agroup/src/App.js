import React, {useState, useEffect} from "react"

function App() {

  const [data, setData] = useState([{}])

  useEffect(()=> {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )


  }, [])


  return (
    <div>
      {data ? 
        (typeof data.members === 'undefined' ? 
          <p>Loading...</p> 
          : 
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )
        : null
      }
    </div>
  );  
}

export default App