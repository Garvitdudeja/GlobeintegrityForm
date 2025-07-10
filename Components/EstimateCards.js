import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { MdOutlineMail } from "react-icons/md";
import { FaDollarSign, FaRegLightbulb  } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";



const EstimateSent = ({ data, next }) => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card className="p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="mb-3 blueText">
          <MdOutlineMail  size={34} className='mb-1'/> Estimate Sent!
        </h3>
        <p>We’ve sent your custom life insurance estimate to:</p>
        <h5 className="fw-bold">{data?.Email}</h5>

        <div className="mt-4">
          <h6 className="fw-bold">What’s Inside:</h6>
          <ul className="list-unstyled ms-2">
            <li><FaDollarSign className='blueText'/> Your monthly contribution</li>
            <li><SlGraph className='blueText'/> Projected cash value</li>
            <li><FaRegLightbulb className='blueText'/> Overview of your potential policy</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="mb-2 fw-medium">Want help reviewing it?</p>
          <Button variant="commonBtn" className="mainButton" onClick={next}>
            Schedule a Free Call →
          </Button>
        </div>

        <p className="text-muted mt-3" style={{ fontSize: '0.9rem' }}>
          If you don’t see it in your inbox within a few minutes, check your spam or promotions folder.
        </p>
        <Link href="https://globeintegrity.com/" className="text-decoration-none blueText mt-2 d-block">Back to Homepage</Link>
      </Card>
    </Container>
  );
};

export default EstimateSent;
