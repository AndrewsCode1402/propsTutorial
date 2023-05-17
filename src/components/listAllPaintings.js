import Painting from '../components/painting';


  
  export function ListAllPaintings({ arrayOfItems }) {
    
    const paintingCards = arrayOfItems.map(painting =>
      <Painting details={{ ...painting }}></Painting>
    );
    return <div className='paintings'>{paintingCards}</div>;
  }