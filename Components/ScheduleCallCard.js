import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { MdOutlineCheckCircle, MdOutlineCalendarToday } from 'react-icons/md';
import { FaCheck } from "react-icons/fa6";


const ScheduleCallCard = ({data, next}) => {
  return (
    <Container className="d-flex justify-content-center align-items-center my-5">
      <Card className="p-4 shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
        <h3 className="fw-bold">Your Estimate is Ready!</h3>
        <p className="mt-3">
          Based on your answers, a licensed expert will walk you through your custom plan — including
          the coverage amount, projected value, and options to fit your goals.
        </p>

        <h5 className="fw-bold mt-4">What Happens Next:</h5>
        <ul className="list-unstyled mt-3">
          <li className="mb-2">
            <FaCheck className="text-primary me-2" />
            Get a clear explanation of how your plan grows
          </li>
          <li className="mb-2">
            <FaCheck className="text-primary me-2" />
            Ask any questions about coverage, value, or flexibility
          </li>
          <li>
            <FaCheck className="text-primary me-2" />
            Lock in the best option for you
          </li>
        </ul>

        <h5 className="fw-bold mt-4" >Schedule Your Free Consultation</h5>

        <Button className="w-100 mt-3 mb-2 d-flex align-items-center justify-content-center mainButton" onClick={next}>
          <MdOutlineCalendarToday className="me-2" size={20} />
          Schedule My Call
        </Button>

        <p className="text-center text-muted mt-2">Connect with an expert to review your options</p>

        <p className="text-center mt-3 mb-1">or</p>

        <p className="text-center">
          <h5 className="fw-bold text-decoration-none blueText" onClick={()=>{next("",2)}}>Email Me My Estimate</h5>
        </p>
        <p className="text-center text-muted" style={{ fontSize: '0.9rem' }}>
          We’ll send a summary to your inbox.
        </p>
        <p className="text-center text-muted" style={{ fontSize: '0.9rem' }}>
          Your information is secure and will never be shared. <br />
          No obligations, just expert guidance.
        </p>
      </Card>
    </Container>
  );
};

export default ScheduleCallCard;
