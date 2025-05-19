 const person={
    name:"soni takla",
    age:22,
    theme:{
        backgroundColor:"black",
        color:"pink"
    }
 };
  function Profile(){
    return(
        <div style={person.theme}>
            <h1> {person.name} Arpit</h1>
            <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
        style={{borderRadius: "50%",width: "100px", }}
      />
       <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
      </div>

    )
  }
    export default Profile;
