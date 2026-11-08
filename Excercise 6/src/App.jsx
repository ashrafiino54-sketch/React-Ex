import { useState, useEffect } from "react"
function App() {
  
  const [name, setName] = useState ("")
  const [greeting, setGreeting] = useState ("Hello")

  useEffect (()=>{
    
    if (name.trim() === "") {
      document.title = "welcome"
      
    } else {
      document.title = `${greeting}, ${name}`
    }
    
  }, [name, greeting])

  return (
    <>
      <h1>Enter Your Name</h1><br />
      <input 
        type="text" 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
        
      <h1>Choose Greeting</h1><br />
      <input 
        type="text" 
        value={greeting}
        onChange={(e)=> setGreeting (e.target.value)}
        />
    </>
  )
}

export default App
