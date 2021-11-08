const Navigation = () => {


  return(
    <nav>
      <ul>
        {isAutheticated ? {
          <li> <Link to="/list" > List </Link> </li>
          <li> <Link to="/logout" > List </Link> </li>
          } : {
          <li>  <Link to="/login"> </li>
          }
        }
      </ul>
    </nav>

  )
}