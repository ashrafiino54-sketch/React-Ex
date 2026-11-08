const Greeting =({CurentUser,role,age})=>{
    return(
        <>
        <h1>Hello {CurentUser}</h1>
        <span>Your Role is {role}</span>
        <span> My age is {age}</span>
        </>
    )

}
export default Greeting