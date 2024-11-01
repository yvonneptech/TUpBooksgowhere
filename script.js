function searchLocations() {
    const postalCode = document.getElementById('postalCode').value;
    const bookType = document.getElementById('bookTypeSelect').value;
    const results = document.getElementById('results');
  
    // Clear previous results
    results.innerHTML = '';
  
    // Validate postal code
    if (!/^(010000|[1-9][0-9]{5})$/.test(postalCode)) {
      results.textContent = 'Please enter a valid postal code between 010000 and 999999.';
      return;
    }
  
    // Assuming some predefined locations data with postal codes
    const locations = [
      { postalCode: '123456', address: 'Library A - 123 Main St', types: ['both'] },
      { postalCode: '234567', address: 'Library B - 456 Elm St', types: ['story'] },
      { postalCode: '345678', address: 'Community Center - 789 Maple St', types: ['text', 'both'] },
    ];
  
    const filteredLocations = locations.filter(location => 
      location.postalCode.startsWith(postalCode.substring(0, 2)) && 
      (location.types.includes(bookType) || bookType === 'both')
    );
  
    if (filteredLocations.length > 0) {
      filteredLocations.forEach(location => {
        const div = document.createElement('div');
        div.textContent = location.address;
        results.appendChild(div);
      });
    } else {
      results.textContent = 'No locations found near you.';
    }
  }