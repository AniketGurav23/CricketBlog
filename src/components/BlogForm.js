import React, { useState } from 'react';

function CricketPollForm() {
  const [selectedOptions, setSelectedOptions] = useState({
    futureOfCricket: [],
    testCricketAlive: '',
    dropFormat: '',
    franchisePower: '',
    revitalizeODI: [],
    revitalizeTest: [],
  });

  const [submittedData, setSubmittedData] = useState(null);

  const [validationErrors, setValidationErrors] = useState({
    futureOfCricket: '',
    testCricketAlive: '',
    dropFormat: '',
    franchisePower: '',
    revitalizeODI: '',
    revitalizeTest: '',
  });

  const handleCheckboxChange = (e, category) => {
    const value = e.target.value;
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const handleRadioChange = (e, category) => {
    setSelectedOptions({
      ...selectedOptions,
      [category]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to hold validation errors
    const errors = {
      futureOfCricket: '',
      testCricketAlive: '',
      dropFormat: '',
      franchisePower: '',
      revitalizeODI: '',
      revitalizeTest: '',
    };

    // Validate checkboxes
    if (selectedOptions.futureOfCricket.length === 0) {
      errors.futureOfCricket = 'Please select at least one option.';
    }
    if (selectedOptions.revitalizeODI.length === 0) {
      errors.revitalizeODI = 'Please select at least one option.';
    }
    if (selectedOptions.revitalizeTest.length === 0) {
      errors.revitalizeTest = 'Please select at least one option.';
    }

    // Validate radio buttons
    if (!selectedOptions.testCricketAlive) {
      errors.testCricketAlive = 'Please select an option.';
    }
    if (!selectedOptions.dropFormat) {
      errors.dropFormat = 'Please select an option.';
    }
    if (!selectedOptions.franchisePower) {
      errors.franchisePower = 'Please select an option.';
    }

    // Set validation errors if any
    if (Object.values(errors).some(error => error)) {
      setValidationErrors(errors);
      return;
    }

    // If no errors, set submitted data
    setSubmittedData(selectedOptions);
    setValidationErrors({}); // Clear validation errors on successful submission
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start',
      height: '100vh' 
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: submittedData ? 'flex-start' : 'center', 
        alignItems: 'flex-start', 
        width: submittedData ? '80%' : '50%',
        transition: 'width 0.5s ease' 
      }}>
        <form 
          onSubmit={handleSubmit} 
          style={{ 
            flex: submittedData ? 1 : 'unset', 
            paddingRight: submittedData ? '20px' : '0',
            width: submittedData ? '50%' : '100%',
          }}
        >
          <div>
            <h3>Where do you see cricket in 10-15 years from now? (Select all that apply) *</h3>
            <label>
              <input
                type="checkbox"
                value="No more One Day Internationals (ODIs)"
                onChange={(e) => handleCheckboxChange(e, 'futureOfCricket')}
              />
              No more One Day Internationals (ODIs)
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="Two IPLs in a calendar year"
                onChange={(e) => handleCheckboxChange(e, 'futureOfCricket')}
              />
              Two IPLs in a calendar year
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="Cricket becoming a regular in the Olympics"
                onChange={(e) => handleCheckboxChange(e, 'futureOfCricket')}
              />
              Cricket becoming a regular in the Olympics
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="Rise in the T10 or Hundred format"
                onChange={(e) => handleCheckboxChange(e, 'futureOfCricket')}
              />
              Rise in the T10 or Hundred format
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="Women's IPL and rise in Women's T20 leagues"
                onChange={(e) => handleCheckboxChange(e, 'futureOfCricket')}
              />
              Women's IPL and rise in Women's T20 leagues
            </label>
            <div style={{ color: 'red' }}>{validationErrors.futureOfCricket}</div>
          </div>

          <div>
            <h3>Do you think that Test cricket will be alive in the next 10-15 years? *</h3>
            <label>
              <input
                type="radio"
                value="Yes"
                name="testCricketAlive"
                onChange={(e) => handleRadioChange(e, 'testCricketAlive')}
                required
              />
              Yes
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="No"
                name="testCricketAlive"
                onChange={(e) => handleRadioChange(e, 'testCricketAlive')}
              />
              No
            </label>
            <div style={{ color: 'red' }}>{validationErrors.testCricketAlive}</div>
          </div>

          <div>
            <h3>If you had to drop one format to reduce pressure on scheduling, what would it be? *</h3>
            <label>
              <input
                type="radio"
                value="Tests"
                name="dropFormat"
                onChange={(e) => handleRadioChange(e, 'dropFormat')}
                required
              />
              Tests
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="ODIs"
                name="dropFormat"
                onChange={(e) => handleRadioChange(e, 'dropFormat')}
              />
              ODIs
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="T20 Internationals"
                name="dropFormat"
                onChange={(e) => handleRadioChange(e, 'dropFormat')}
              />
              T20 Internationals
            </label>
            <div style={{ color: 'red' }}>{validationErrors.dropFormat}</div>
          </div>

          <div>
            <h3>Do you think T20 franchise owners will have more power over cricket boards in the future? *</h3>
            <label>
              <input
                type="radio"
                value="Yes"
                name="franchisePower"
                onChange={(e) => handleRadioChange(e, 'franchisePower')}
                required
              />
              Yes
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="No"
                name="franchisePower"
                onChange={(e) => handleRadioChange(e, 'franchisePower')}
              />
              No
            </label>
            <div style={{ color: 'red' }}>{validationErrors.franchisePower}</div>
          </div>

          <div>
            <h3>What are some ways you think ODI cricket can be revitalised? (Select all that apply) *</h3>
            <label>
              <input
                type="checkbox"
                value="Ditch the two new balls and only have one"
                onChange={(e) => handleCheckboxChange(e, 'revitalizeODI')}
              />
              Ditch the two new balls and only have one
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="More sporting wickets that seam and spin"
                onChange={(e) => handleCheckboxChange(e, 'revitalizeODI')}
              />
              More sporting wickets that seam and spin
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="T20-style rules like Powerplays and more restrictions"
                onChange={(e) => handleCheckboxChange(e, 'revitalizeODI')}
              />
              T20-style rules like Powerplays and more restrictions
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="Changes in the fielding restrictions to make it more exciting"
                onChange={(e) => handleCheckboxChange(e, 'revitalizeODI')}
              />
              Changes in the fielding restrictions to make it more exciting
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="More emphasis on finishing games in 40 overs or less"
                onChange={(e) => handleCheckboxChange(e, 'revitalizeODI')}
              />
              More emphasis on finishing games in 40 overs or less
            </label>
            <div style={{ color: 'red' }}>{validationErrors.revitalizeODI}</div>
          </div>

          <div>
            <h3>What are some ways you think Test cricket can be revitalised? (Select all that apply) *</h3>
            <label>
              <input
                type="checkbox"
                value="Revitalize Test cricket with a new four-day Test format"
                onChange={(e) => handleCheckboxChange(e, 'revitalizeTest')}
              />
              Revitalize Test cricket with a new four-day Test format
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="Introduce a four-day Test format"
                onChange={(e) => handleCheckboxChange(e, 'revitalizeTest')}
              />
              Introduce a four-day Test format
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="More day-night Test matches"
                onChange={(e) => handleCheckboxChange(e, 'revitalizeTest')}
              />
              More day-night Test matches
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="Incentives and rewards for players and teams"
                onChange={(e) => handleCheckboxChange(e, 'revitalizeTest')}
              />
              Incentives and rewards for players and teams
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="Increased focus on Test cricket in media"
                onChange={(e) => handleCheckboxChange(e, 'revitalizeTest')}
              />
              Increased focus on Test cricket in media
            </label>
            <div style={{ color: 'red' }}>{validationErrors.revitalizeTest}</div>
          </div>

          <br />
          <button type="submit">Submit Poll</button>
        </form>

        {submittedData && (
          <div style={{ flex: 1, marginLeft: '20px' }}>
            <div style={{
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              padding: '16px', 
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f9f9f9',
              marginRight: '20px',
              marginTop: '20px',
            }}>
              <h3>Poll Results</h3>
              <p><strong>Future of Cricket:</strong> {submittedData.futureOfCricket.join(', ') || 'N/A'}</p>
              <p><strong>Test Cricket Alive:</strong> {submittedData.testCricketAlive || 'N/A'}</p>
              <p><strong>Drop Format:</strong> {submittedData.dropFormat || 'N/A'}</p>
              <p><strong>Franchise Power:</strong> {submittedData.franchisePower || 'N/A'}</p>
              <p><strong>Revitalize ODI:</strong> {submittedData.revitalizeODI.join(', ') || 'N/A'}</p>
              <p><strong>Revitalize Test:</strong> {submittedData.revitalizeTest.join(', ') || 'N/A'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CricketPollForm;
