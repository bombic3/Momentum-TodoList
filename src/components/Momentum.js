import React from 'react';
import Clock from 'react-live-clock';
import './Momentum.scss';

const Momentum = () => {
  return (
    <div>
      <Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    </div>
  );
};

export default Momentum;