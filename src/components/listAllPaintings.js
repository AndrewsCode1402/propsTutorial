import Flying from '../assets/flying.jpg';
import Mountains from '../assets/mountains.jpg';
import Cat from '../assets/cat.jpg';
import Painting from '../components/painting';

const paintings = [
    {
      title: 'Flying Carpet (1880)',
      subtitle: 'Viktor Vasnetsov',
      image:  Flying,
      altTag: 'Flying Carpet by Victor Vasnetsov'
    },
    {
      title: 'King Lake, California (1870-1875)',
      subtitle: 'Albert Bierstadt',
      image:  Mountains,
      altTag: 'King Lake, California by Albert Bierstadt'
    },
    {
      title: "Cat on a Cushion (L'hiver: Chat sur un coussin)  (1913)",
      subtitle: "Théophile Alexandre Steinlen",
      image: Cat,
      altTag: "Winter: Cat on a Cushion by Théophile Alexandre Steinlen"
    }
  
  ];
  
  export function ListAllPaintings() {
    const paintingCards = paintings.map(painting =>
      <Painting details={{ ...painting }}></Painting>
    );
    return <div className='paintings'>{paintingCards}</div>;
  }