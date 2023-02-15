import {FaGithubSquare} from 'react-icons/fa'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Review from './Review';

function App() {
  return (
  <main>
    <section className="container text-center">
      <div className="title">
        <h2 className=''>Our Reviews</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </section>
  </main>
  );
}

export default App;
