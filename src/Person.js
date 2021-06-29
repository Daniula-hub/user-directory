export default function Person(props){
    // const {name, employer } = person; 
    return(
        <>
       <h2> { `${props.person.name.first} ${props.person.name.last}`}</h2>
       <h3 >  <strong>From:</strong>  {props.person.city}, {props.person.country} </h3>
       <h3 >  <strong>Job Title: </strong> {props.person.title} </h3>
       <h3 >  <strong>Employer: </strong> {props.person.employer} </h3>
       <h3 >  <strong>Favorite Movies:</strong> <ol>{ props.person.favoriteMovies} </ol>  </h3>
        </>
    )
}