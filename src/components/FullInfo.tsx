import React, { useEffect, useState } from "react";
import { User } from '../types/userTypes';
import Card from 'react-bootstrap/Card';
import { useNavigate, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { getUser } from "../API/users";
import CardGroup from 'react-bootstrap/CardGroup';


export const FullInfo = () => {
    const [userData, setUserData] = useState<User>()
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.state.userId;
    const goBack = () => {
      navigate(-1);
    };

    useEffect(() => {
        getUser(userId).then((user) => setUserData(user)).catch(console.error)
    }, [])


    console.log(userData, "AAAa")
    return(
        <CardGroup style={{display: "flex",justifyContent: "center", marginTop: "5px" }}>
            <Card style={{ width: "350px", border:"3px solid black", background: "pink"}}>
      <Card.Body style={ {display: "flex",flexDirection: "column", alignItems: "center",}}>
        <Card.Title style={{fontWeight: "700"}}>
          {userData?.name}
        </Card.Title>
        <Card.Text>
          Id - {userData?.id}
        </Card.Text>
        <Card.Text>
          Username - {userData?.username}
        </Card.Text>
        <Card.Text>
          Email - {userData?.email}
        </Card.Text>
        <Card.Text>
          Phone number - {userData?.phone}
        </Card.Text>
        <Card.Text>
          Website - {userData?.website}
        </Card.Text>
        <Card.Text>
          Company:
          <br />
          1) {userData?.company.name} <br />
          2) {userData?.company.catchPhrase} <br />
          3) {userData?.company.bs} <br />
        </Card.Text>
        <Card.Text>
          Address:
          <br />
          1) {userData?.address.street} <br />
          2) {userData?.address.suite} <br />
          3) {userData?.address.city} <br />
          4) {userData?.address.zipcode} <br />
          5) {userData?.address.geo?.lat} <br />
          6) {userData?.address.geo?.lng} <br />
        </Card.Text>
       
        <Button variant="primary" onClick={goBack} style={{marginBottom: "5px"}}>
            Previous page
        </Button>
      </Card.Body>
    </Card>
    </CardGroup>
        
    )
}
