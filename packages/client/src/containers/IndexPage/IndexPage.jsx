import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiURL } from '../../apiURL';
import './IndexPage.css';

function Index() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue === 'TeamCode') {
      try {
        const response = await fetch(`${apiURL}/CreateNewTeam/${inputValue}`);
        if (response.ok) {
          navigate('/retroPage');
        } else {
          // console.error('Invalid code');
        }
      } catch (error) {
        // console.error('Error navigating to retroPage:', error);
      }
    } else {
      // console.error('Invalid code');
    }
  };

  const handleCreateNewTeamClick = () => {
    navigate('/CreateNewTeamPage');
  };

  return (
    <div>
      <div className="header-container">
        <h2>Join with</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Team Code"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="my-button">
            Submit
          </button>
        </form>
      </div>
      <h3> OR </h3>
      <button
        type="button"
        onClick={handleCreateNewTeamClick}
        className="my-button"
      >
        Create New Team
      </button>
      <footer>
        <p>Created by RetroRealm</p>
        <p>&copy; 2024 RetroRealm. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Index;
