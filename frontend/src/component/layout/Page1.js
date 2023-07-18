import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import './Form.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { createVenue } from '../../actions/venueActions.js';

const Page1 = () => {
  const dispatch = useDispatch();

  const [venueName, setVenueName] = useState('');
  const [venueAddress, setVenueAddress] = useState('');
  const [venueType, setVenueType] = useState('');
  const [venueCategory, setVenueCategory] = useState([]);
  const [photosAndVideos, setPhotosAndVideos] = useState(null);
  const [establishmentYear, setEstablishmentYear] = useState(null);
  const [ownershipType, setOwnershipType] = useState('');
  const [availability, setAvailability] = useState([null, null]);

  const [startDate, setStartDate] = useState(null);

  const handleChange = (date) => {
    setStartDate(date);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    if (event.target.checked) {
      setVenueCategory([...venueCategory, category]);
    } else {
      setVenueCategory(venueCategory.filter((item) => item !== category));
    }
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const formData = {
      venueName,
      venueAddress,
      venueType,
      venueCategory,
      photosAndVideos,
      establishmentYear,
      ownershipType,
      availability,
    };

    // console.log('Form submitted:', {
    //   venueName,
    //   venueAddress,
    //   venueType,
    //   venueCategory,
    //   photosAndVideos,
    //   establishmentYear,
    //   ownershipType,
    //   availability,
    // });
  
    dispatch(createVenue(formData));
  };

  return (
    <div className="venue-form">
      <h2>Venue Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="venueName">Venue Name:</label>
          <input
            type="text"
            id="venueName"
            value={venueName}
            onChange={(e) => setVenueName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="venueAddress">Venue Address:</label>
          <textarea
            id="venueAddress"
            value={venueAddress}
            onChange={(e) => setVenueAddress(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="venueType">Venue Type:</label>
          <select
            id="venueType"
            value={venueType}
            onChange={(e) => setVenueType(e.target.value)}
            required
          >
            <option value="">Select Venue Type</option>
            <option value="Conference Centre">Conference Centre</option>
            <option value="Hotel">Hotel</option>
            <option value="Outdoor Space">Outdoor Space</option>
            <option value="Banquet Hall">Banquet Hall</option>
            <option value="Stadium">Stadium</option>
            <option value="Auditorium">Auditorium</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Museum">Museum</option>
          </select>
        </div>

        <div className="form-group">
          <label>Venue Category:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="Weddings"
                checked={venueCategory.includes('Weddings')}
                onChange={handleCategoryChange}
              />
              Weddings
            </label>
            <label>
              <input
                type="checkbox"
                value="Corporate Events"
                checked={venueCategory.includes('Corporate Events')}
                onChange={handleCategoryChange}
              />
              Corporate Events
            </label>
            <label>
              <input
                type="checkbox"
                value="Concerts"
                checked={venueCategory.includes('Concerts')}
                onChange={handleCategoryChange}
              />
              Concerts
            </label>
            <label>
              <input
                type="checkbox"
                value="Exhibitions"
                checked={venueCategory.includes('Exhibitions')}
                onChange={handleCategoryChange}
              />
              Exhibitions
            </label>
            <label>
              <input
                type="checkbox"
                value="Private Parties"
                checked={venueCategory.includes('Private Parties')}
                onChange={handleCategoryChange}
              />
              Private Parties
            </label>
            <label>
              <input
                type="checkbox"
                value="Festivals"
                checked={venueCategory.includes('Festivals')}
                onChange={handleCategoryChange}
              />
              Festivals
            </label>
            <label>
              <input
                type="checkbox"
                value="Workshops"
                checked={venueCategory.includes('Workshops')}
                onChange={handleCategoryChange}
              />
              Workshops
            </label>
            <label>
              <input
                type="checkbox"
                value="Seminars"
                checked={venueCategory.includes('Seminars')}
                onChange={handleCategoryChange}
              />
              Seminars
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="photosAndVideos">Photos and Videos:</label>
          <input
            type="file"
            id="photosAndVideos"
            onChange={(e) => setPhotosAndVideos(e.target.files)}
            multiple
          />
        </div>

        <div className="form-group">
          <label htmlFor="establishmentYear">Year of Establishment:</label>
          <DatePicker
            id="establishmentYear"
            selected={establishmentYear}
            onChange={(date) => setEstablishmentYear(date)}
            showYearPicker
            dateFormat="yyyy"
            required
          />
        </div>

        <div className="form-group">
          <label>Ownership Type:</label>
          <div>
            <label>
              <input
                type="radio"
                value="Privately Owned"
                checked={ownershipType === 'Privately Owned'}
                onChange={(e) => setOwnershipType(e.target.value)}
              />
              Privately Owned
            </label>
            <label>
              <input
                type="radio"
                value="Chain"
                checked={ownershipType === 'Chain'}
                onChange={(e) => setOwnershipType(e.target.value)}
              />
              Chain
            </label>
            <label>
              <input
                type="radio"
                value="Government-Owned"
                checked={ownershipType === 'Government-Owned'}
                onChange={(e) => setOwnershipType(e.target.value)}
              />
              Government-Owned
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="availability">Availability:</label>
        
          <DatePicker
            id="availability"
            dateFormat="MM-dd-yyyy"
            selected={startDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page1;
