import React from 'react';
import Clock from 'react-live-clock';
import './Momentum.scss';

const Momentum = () => {
  return (
    <div className='clock'>
      <Clock
        format={'HH:mm:ss'}
        ticking={true}
        timezone={'Asia/Seoul'} />
    </div>
  );
};

export default Momentum;