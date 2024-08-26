import React from 'react';
import ClassCard from './ClassCard';
import './OurClasses.css';

const OurClasses = () => {
  const classes = [
    { id: 1, title: 'Yoga', description: 'Relax and rejuvenate your mind and body.', img: 'yoga.jpg' },
    { id: 2, title: 'Pilates', description: 'Strengthen your core with Pilates.', img: 'pilates.jpg' },
    { id: 3, title: 'Zumba', description: 'Dance your way to fitness.', img: 'zumba.jpg' }
  ];

  return (
    <section className="our-classes">
      <h2>Our Classes</h2>
      <div className="classes-container">
        {classes.map(classItem => (
          <ClassCard key={classItem.id} title={classItem.title} description={classItem.description} img={classItem.img} />
        ))}
      </div>
    </section>
  );
};

export default OurClasses;
