import Header from '../Header'
import Main from './Main'
import Testimonials from './Testimonials'
import Restaurant from './Restaurant'
import restauranfood from '../../icons_assets/restauranfood.jpg'


function Home() {
  return (
    <>
      <Header image = {restauranfood} paragraph="A taste of Italy, a touch of charm. At Little Lemon, we blend tradition, warmth, and vibrant hospitality to create a dining experience that feels like home – only better." /> 
      <Main />
      <Testimonials />
      <Restaurant />
    </>
  );
}

export default Home;
