import './app.scss';
import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

function App() {
  const [date, setDate] = useState(new Date());


  return (
    
    <div className="page">

      <div className='banner'>
        <div className='title'>
          <h1>
            FarmFresh Rentals
          </h1>
          <p>
            Less Pain. More Grain.
          </p>
        </div>
        <div className='menu'>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="a">Home</a></li>
            <li><a href="a">About Us</a></li>
            <li><a href="a">Hiring</a></li>
            <li><a href="a">Shop</a></li>
            <li><a href="a">News Letter</a></li>
          </ul>
        </nav>
        </div>
      </div>

      <div className='content'>

        <div className='text-zone'>
          <h2>About Your Machine</h2>
          <h3>Happy Seeder</h3>
          <p>An innovative agricultural machine that promotes sustainable farming practices. Say goodbye to tillage and residue burning. With the Happy Seeder, you can sow your crops directly into the stubble, preserving soil moisture, preventing erosion, and improving soil health. It's an eco-friendly solution for efficient crop residue management. Experience the benefits of this cutting-edge technology and enhance your farming practices today.</p>
          <h3>Bale Grinder and Shredder</h3>
          <p>A versatile machine that revolutionizes your bale management process. Say goodbye to manual labor and inefficiencies. With the Bale Grinder and Shredder, you can effortlessly break down and shred bales of various materials, such as hay, straw, or silage. This powerful equipment simplifies the feeding, bedding, and composting operations on your farm. By reducing bales into manageable sizes, it enhances feed distribution, improves bedding consistency, and aids in effective composting. Experience the convenience and efficiency of the Bale Grinder and Shredder for optimized bale utilization on your farm.</p>
        </div>

        <div className='model-list'>
          <h2>Available Models</h2>
            <button id="button1" className="myButton">Happy Seeder</button>
            <button id="button2" className="myButton">Bale Grinder and Shredder</button>

          <div className='image-container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/National_Agro_Happy_Seeder.jpg/1200px-National_Agro_Happy_Seeder.jpg' alt=''></img>
            <img src='https://www.blaneyagri.com/wp-content/uploads/2013/07/baleshredder-load.jpg' alt=''></img>
          </div>
        </div>

      </div>

      <div className='booking-zone'>
        <div className='calendar'>
            <Calendar 
            onChange={setDate} 
            value={date} 
            selectRange={true}
            />
            {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Select a Range to Hire</span>
        </p>
      )}
          </div>

          <a className='book-button' href='machine_booking'>Book a Machine</a>
      </div>

      <footer id="footer" className="footer">

        <div className="container mt-4">
          <div className="copyright">
            © Copyright <strong><span>TEAM 11</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            
            Designed by Team 11
          </div>
        </div>

      </footer>

    </div>
  );
}

export default App;
