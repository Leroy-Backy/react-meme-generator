import {useState} from "react";
import IsFav from "./IsFav";

export default function ObjectUseState() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    isFavourite: false,
    contact: {
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com"
    }
  });
  
  function changeBool() {
    setContact(prev => ({...prev, isFavourite: !prev.isFavourite}))
  }
  
  function changeContact() {
    setContact(prev => (
      {...prev, 
        contact: {
          ...prev.contact, 
          email: prev.contact.email + ">",
          phone: prev.contact.phone + ">"
        }
      }
    ))
  }
  
  return (
    <div>
      <div>{contact.firstName} {contact.lastName}</div>
      {/*<div onClick={changeBool}>{contact.isFavourite ? "TRUE" : "FALSE"}</div>*/}
      <IsFav isFavourite={contact.isFavourite} changeBool={changeBool}/>
      <div onClick={changeContact}>{contact.contact.phone}<br/>{contact.contact.email}</div>
    </div>
  );
}