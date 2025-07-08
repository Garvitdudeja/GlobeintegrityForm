// components/EstimateCard.js
import Link from 'next/link';
import React from 'react';
import { estimateCoverageAndValue } from './CommonFunctions';

const EstimateCard = ({ data, next }) => {
    const {coverage, estimatedValue} = estimateCoverageAndValue(data)
  return (
    <div className="container my-5">
      <div className="mb-4">
        <h4>Want to review your estimate with a licensed expert?</h4>
        <p>Schedule a quick call now.</p>
        <button className="btn btn-primary me-3" onClick={next}>Schedule</button>
        <Link href="https://globeintegrity2.vercel.app/" className="text-decoration-underline">Skip for now</Link>
      </div>

      <div className="mb-4">
        <h3>Your estimate is ready!</h3>
        <p>Based on <strong>your</strong> answers, we&apos;ve selected the best life insurance option for you.</p>
      </div>

      <div className="border rounded p-4 shadow-sm">
        <h5 className="text-primary fw-bold">Indexed Universal Life</h5>
        <h2 className="fw-bold">${data?.monthlyContribution} <small className="fs-5 text-muted">per month</small></h2>

        <div className="d-flex justify-content-between mt-3">
          <div>
            <small className="text-muted">Estimated Value at 65</small>
            <h5 className="fw-bold">${estimatedValue}</h5>
          </div>
          <div>
            <small className="text-muted">Coverage</small>
            <h5 className="fw-bold">${coverage}</h5>
          </div>
        </div>

        <div className="mt-4 d-flex gap-2">
          <button className="btn btn-info text-white" onClick={next}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default EstimateCard;
