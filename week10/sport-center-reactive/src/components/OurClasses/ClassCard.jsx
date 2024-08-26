import sampleImage1 from '../../assets/client1.jpg';
import sampleImage2 from '../../assets/client2.jpg';

const images = {
  sampleImage1,
  sampleImage2,
};

const ClassCard = ({ title, description, img }) => {
  return (
    <div className="class-card">
      <img src={images[img]} alt={title} className="class-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ClassCard;
