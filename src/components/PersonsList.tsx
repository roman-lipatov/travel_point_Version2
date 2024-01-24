import React, { useEffect, useState } from "react";
import { getUsers } from '../API/users';
import { User } from '../types/userTypes';
import { PersonsCard } from "./PersonsCard";
import CardGroup from 'react-bootstrap/CardGroup';
import { Card } from "react-bootstrap";

export const PersonsList = () => {
    const [fetchedUsers, setFetchedUsers] = useState<User[]>([])

    useEffect(() => {
        getUsers().then((user) => setFetchedUsers(user))
        .catch(console.error);
    }, [fetchedUsers.length])
  return (
    <>
    {fetchedUsers.length > 0 && (
      <Card style={{display: "flex", justifyContent: "center", fontSize: 40, fontWeight: "600", textShadow: "1px 1px 2px black, 0 0", color: "pink"}}>
        {fetchedUsers.length} User/s in list
      </Card>
    )}
    <CardGroup style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "5px"}}>
   
      {fetchedUsers.length > 0 && (
        fetchedUsers.map((user) => 
          <PersonsCard 
            id={user.id} 
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
            address={user.address}
            company={user.company}
          />       
      ))}
      {fetchedUsers.length === 0 &&(
        <Card style={{display: "flex", justifyContent: "center", fontSize: 40, fontWeight: "600", textShadow: "1px 1px 2px black, 0 0", color: "pink"}}>
        No Users
      </Card>
      ) }
    </CardGroup>
   
    </>
    
  )
}