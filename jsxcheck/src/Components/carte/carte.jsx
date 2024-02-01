import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './carte.css'
import Name from '../Name/name'
import Description from '../Description/description';
import Price from '../Prix/prix'
import Image from '../image/image'

const Carte = () => {
  return (
   <div className='container '>
        <Card style={{ width: '18rem' }}>
      <Image /> 
    <Card.Body>
      <Card.Title> <Name /> </Card.Title>
      <Card.Text>  <Description /> </Card.Text>
      <Card.Text> <Price /> </Card.Text>
      <Button variant="success">ACHETEZ</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default Carte