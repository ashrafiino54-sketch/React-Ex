import Greeting from "./Greeting"

function App() {
  const CurentUser = "Abdinasir"
  const role = "admin"
  const age = 19
  return (
    <>
    <Greeting 
      CurentUser = {CurentUser}
      role = {role}
      age = {age}
      />
      
    </>
  )
}

export default App