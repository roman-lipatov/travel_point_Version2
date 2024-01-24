import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Address, Company } from '../types/userTypes';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type Props = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
};

export const PersonsCard: React.FC<Props> = ({id, name, username, email, phone, website, address, company}) => {
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    userId: id,
  })

  const fullInfo = () => {
    setData({userId: id})
    navigate('/fullInfo', {state: data})
  }

  return (
    <Card style={{ width: "350px", border:"3px solid black", background: "pink", marginTop: "5px"}}>
      <Card.Body style={ {display: "flex",flexDirection: "column", alignItems: "center",}}>
        <Card.Title style={{fontWeight: "700"}}>
          {name}
        </Card.Title>
        <Card.Text>
          Email - {email}
        </Card.Text>
        <Button variant="primary" onClick={fullInfo} style={{marginBottom: "5px"}}>
            Details
        </Button>
      </Card.Body>
    </Card>
  );
}
