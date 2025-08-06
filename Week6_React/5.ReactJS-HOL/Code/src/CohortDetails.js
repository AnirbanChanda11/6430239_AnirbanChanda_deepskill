import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  return (
    <div className={styles.box}>
      <h3 style={{ color: cohort.currentStatus === "Ongoing" ? "green" : "blue" }}>
        {cohort.cohortCode}
      </h3>
      <dl>
        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Status:</dt>
        <dd>{cohort.currentStatus}</dd>
          <dt>Coach:</dt>
        <dd>{cohort.coachName}</dd>
          <dt>Trainer:</dt>
        <dd>{cohort.trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;

