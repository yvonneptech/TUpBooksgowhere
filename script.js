// Community clubs data organized by postal code ranges
const communityClubsData = {
    '01': [
        ['imPAct@Hong Lim Green', '20, Upper Pickering Street', '', '058284', {storybooks: true, textbooks: true}],
        ['Kreta Ayer CC', '28A, KRETA AYER ROAD', '', '088995', {storybooks: true, textbooks: true}],
        ['Tanjong Pagar CC', '101, CANTONMENT ROAD', '', '089774', {storybooks: true, textbooks: true}],
        ['Radin Mas CC', '51, TELOK BLANGAH CRESCENT', 'RADIN MAS COMMUNITY CLUB', '098917', {storybooks: true, textbooks: true}]
    ],
    '10-19': [
        ['Clementi CC', '220, Clementi Ave 4', '', '129880', {storybooks: true, textbooks: true}],
        ['Dover CC', '1, DOVER ROAD', '#01-300', '130001', {storybooks: true, textbooks: false}],
        ['Henderson CC', '500, BUKIT MERAH VIEW', '', '159682', {storybooks: true, textbooks: true}],
        ['Kampong Glam CC', '385, BEACH ROAD', '', '199581', {storybooks: true, textbooks: false}],
        ['Kim Seng CC', '570, HAVELOCK ROAD', '', '169640', {storybooks: true, textbooks: false}],
        ['Leng Kee CC', '400, LENGKOK BAHRU', '#01-03', '159049', {storybooks: true, textbooks: true}],
        ['Queenstown CC', '365, COMMONWEALTH AVENUE', '#01-01', '149732', {storybooks: true, textbooks: true}],
        ['Telok Blangah CC', '450, TELOK BLANGAH ST 31', '#01-01', '108943', {storybooks: true, textbooks: true}],
        ['Tiong Bahru CC', '67A, EU CHIN STREET', '', '169715', {storybooks: true, textbooks: true}],
        ['West Coast CC', '2, CLEMENTI WEST ST 2', '#01-05', '129605', {storybooks: true, textbooks: true}]
    ],
    '20-29': [
        ['Buona Vista CC', '36, HOLLAND DRIVE', '#01-01', '270036', {storybooks: true, textbooks: false}],
        ['Cairnhill CC', '1, ANTHONY ROAD', '', '229944', {storybooks: true, textbooks: true}],
        ['Jalan Besar CC', '69, JELLICOE RD', '', '208737', {storybooks: true, textbooks: false}],
        ['Pek Kio CC', '21, GLOUCESTER ROAD', '#01-01', '219458', {storybooks: true, textbooks: true}],
        ['Tanglin CC', '245, WHITLEY ROAD', '', '297829', {storybooks: true, textbooks: false}],
        ['Ulu Pandan CC', '170, GHIM MOH ROAD', '#01-01', '279621', {storybooks: true, textbooks: true}]
    ],
    '30-39': [
        ['Bidadari CC', '11 BIDADARI PARK DRIVE', '#01-60', '367803', {storybooks: true, textbooks: true}],
        ['Geylang West CC', '1205, UPPER BOON KENG ROAD', '', '387311', {storybooks: true, textbooks: true}],
        ['Kallang CC', '45, BOON KENG ROAD', '', '339771', {storybooks: false, textbooks: true}],
        ['Kolam Ayer CC', '1, GEYLANG BAHRU LANE', '#01-01', '339631', {storybooks: true, textbooks: false}],
        ['MacPherson CC', '400, PAYA LEBAR WAY', '', '379131', {storybooks: true, textbooks: true}],
        ['Mountbatten CC', '[Temp Office] 54, CASSIA CRESCENT', '#01-137', '390054', {storybooks: false, textbooks: false}],
        ['Potong Pasir CC', '6, POTONG PASIR AVE 2', '', '358361', {storybooks: true, textbooks: true}],
        ['Toa Payoh Central CC', '93, TOA PAYOH CENTRAL', '#01-01', '319194', {storybooks: true, textbooks: true}],
        ['Toa Payoh East CC', '160, LOR 6 TOA PAYOH', '', '319380', {storybooks: true, textbooks: false}],
        ['Toa Payoh South CC', '1999, LOR 8 TOA PAYOH', '', '319258', {storybooks: true, textbooks: true}],
        ['Toa Payoh West CC', '200, LORONG 2 TOA PAYOH', '', '319642', {storybooks: true, textbooks: true}],
        ['Whampoa CC', '300, WHAMPOA DRIVE', '#01-01', '327737', {storybooks: true, textbooks: true}]
    ],
    '40-49': [
        ['Bedok CC', '850, NEW UPPER CHANGI ROAD', '', '467352', {storybooks: true, textbooks: false}],
        ['Eunos CC', '70A, Bedok Reservoir Road', '', '479312', {storybooks: true, textbooks: true}],
        ['Fengshan CC', '20, Bedok North Street 2', '', '469644', {storybooks: true, textbooks: true}],
        ['Geylang Serai CC', '1, ENGKU AMAN TURN', '#01-01', '408528', {storybooks: true, textbooks: false}],
        ['Heartbeat@Bedok', '11, Bedok North Street 1', '#02-04', '469662', {storybooks: true, textbooks: true}],
        ['Joo Chiat CC', '405, JOO CHIAT ROAD', '#1-1', '427633', {storybooks: false, textbooks: true}],
        ['Kaki Bukit CC', '670, BEDOK NORTH STREET 3', '', '469627', {storybooks: true, textbooks: true}],
        ['Kampong Ubi CC', '10, JALAN UBI', '', '409075', {storybooks: true, textbooks: true}],
        ['Katong CC', '51, KAMPONG ARANG ROAD', '', '438178', {storybooks: true, textbooks: true}],
        ['Marine Parade CC', '[Temp Office] 67 Marine Drive', '#01-222', '440067', {storybooks: false, textbooks: false}],
        ['PAssion WaVe @ Bedok Reservoir', '911, Bedok Reservoir Road', '', '479311', {storybooks: true, textbooks: true}],
        ['PAssion WaVe @ East Coast', '1390, EAST COAST PARKWAY', '', '468961', {storybooks: true, textbooks: true}],
        ['PAssion WaVe @ Marina Bay', '11, RHU CROSS', '#01-01', '437440', {storybooks: false, textbooks: true}],
        ['Siglap CC', '151, BEDOK SOUTH ROAD', '', '460151', {storybooks: true, textbooks: true}],
        ['Siglap South CC', '6, PALM ROAD', '', '456441', {storybooks: true, textbooks: false}],
        ['Water-Venture (Changi)', '285, NICOLL DRIVE CHANGI POINT', '', '498988', {storybooks: true, textbooks: true}]
    ],
    '50-59': [
        ['Aljunied CC', '110, HOUGANG AVE 1', '#01-1048', '530110', {storybooks: false, textbooks: true}],
        ['Anchorvale CC', '59, ANCHORVALE ROAD', '', '544965', {storybooks: true, textbooks: true}],
        ['Bishan CC', '51, BISHAN STREET 13', '', '579799', {storybooks: true, textbooks: true}],
        ['Braddell Heights CC', '242, SERANGOON AVENUE 3', '#01-198', '550242', {storybooks: false, textbooks: true}],
        ['Buangkok CC', '70 Compassvale Bow', '#01-25', '544692', {storybooks: true, textbooks: true}],
        ['Bukit Timah CC', '20, TOH YI DRIVE', '', '596569', {storybooks: true, textbooks: true}],
        ['Changi Simei CC', '10, SIMEI STREET 2', '', '529915', {storybooks: false, textbooks: true}],
        ['Ci Yuan CC', '51, Hougang Avenue 9', '#01-01', '538776', {storybooks: true, textbooks: true}],
        ['Hougang CC', '35, HOUGANG AVENUE 3', '', '538840', {storybooks: true, textbooks: true}],
        ['Hwi Yoh CC', '535, SERANGOON NORTH AVE 4', '#01-179', '550535', {storybooks: true, textbooks: true}],
        ['Our Tampines Hub', '1, TAMPINES WALK', '#04-01', '528523', {storybooks: false, textbooks: true}],
        ['Pasir Ris Central CC', '536, Pasir Ris Drive 1', '#01-286', '510536', {storybooks: true, textbooks: true}],
        ['Pasir Ris East CC', '1, PASIR RIS DRIVE 4', '#01-08', '519457', {storybooks: false, textbooks: true}],
        ['Pasir Ris Elias CC', '93, PASIR RIS DRIVE 3', '', '519498', {storybooks: true, textbooks: true}],
        ['PAssion WaVe @ Pasir Ris', '125, ELIAS ROAD', '', '519926', {storybooks: true, textbooks: true}],
        ['Paya Lebar Kovan CC', '207, HOUGANG ST 21', '', '530207', {storybooks: true, textbooks: true}],
        ['Punggol CC', '3, HOUGANG AVE 6', '', '538808', {storybooks: false, textbooks: true}],
        ['Rivervale CC', '2, RIVERVALE CLOSE', '#01-01', '544583', {storybooks: true, textbooks: false}],
        ['Sengkang CC', '2, SENGKANG SQUARE', '#01-01', '545025', {storybooks: true, textbooks: true}],
        ['Tampines West CC', '5, TAMPINES AVENUE 3', '', '529705', {storybooks: true, textbooks: true}],
        ['The Serangoon CC', '10, SERANGOON NORTH AVE 2', '', '555877', {storybooks: false, textbooks: true}],
        ['Thomson CC', '233, BISHAN STREET 22', '#01-126', '570233', {storybooks: true, textbooks: true}]
    ],
    '60-69': [
        ['Ayer Rajah CC', '150, PANDAN GARDENS', '#01-01', '609335', {storybooks: true, textbooks: false}],
        ['Boon Lay CC', '10, BOON LAY PLACE', '', '649882', {storybooks: true, textbooks: true}],
        ['Bukit Batok East CC', '268, BUKIT BATOK EAST AVENUE 4', '#1-256', '659841', {storybooks: true, textbooks: true}],
        ['Bukit Panjang CC', '8, PENDING ROAD', '', '678295', {storybooks: true, textbooks: true}],
        ['Chua Chu Kang CC', '35, TECK WHYE AVENUE', '', '688892', {storybooks: true, textbooks: true}],
        ['Gek Poh Ville CC', '1, Jurong West Street 74', '', '649149', {storybooks: true, textbooks: false}],
        ['Hillview CC', '1, HILLVIEW RISE', '#01-01', '667970', {storybooks: true, textbooks: true}],
        ['Hong Kah North CC', '30, BUKIT BATOK STREET 31', '#01-07', '659440', {storybooks: true, textbooks: true}],
        ['Jurong Green CC', '6, JURONG WEST AVE 1', '', '649520', {storybooks: true, textbooks: true}],
        ['Jurong Spring CC', '8, JURONG WEST STREET 52', '', '649296', {storybooks: true, textbooks: true}],
        ['Keat Hong CC', '2, CHOA CHU KANG LOOP', '#01-01', '689687', {storybooks: true, textbooks: true}],
        ['Limbang CC', '20, CHOA CHU KANG ST 52', '#05-10', '689286', {storybooks: true, textbooks: true}],
        ['Nanyang CC', '60, JURONG WEST ST 91', '', '649040', {storybooks: true, textbooks: true}],
        ['PAssion WaVe @ Jurong Lake Gardens', '100, Yuan Ching Road', '', '618662', {storybooks: true, textbooks: true}],
        ['Senja-Cashew CC', '101, BUKIT PANJANG ROAD', '#01-1', '679910', {storybooks: false, textbooks: true}],
        ['The Frontier CC', '60, JURONG WEST CENTRAL 3', '#01-01', '648346', {storybooks: true, textbooks: true}],
        ['Yew Tee CC', '20, CHOA CHU KANG ST 52', '#01-01', '689286', {storybooks: true, textbooks: true}],
        ['Yuhua CC', '90, BOON LAY WAY', '', '609958', {storybooks: true, textbooks: true}],
        ['Zhenghua CC', '640A, SENJA CLOSE', '#01-301', '671640', {storybooks: true, textbooks: false}]
    ],
    '70-79': [
        ['ACE The Place CC', '120, WOODLANDS AVENUE 1', '', '739069', {storybooks: true, textbooks: false}],
        ['Admiralty CC', 'Block 547 Woodlands Drive 16', '#01-177', '730547', {storybooks: true, textbooks: true}],
        ['Canberra CC', '2, SEMBAWANG CRESCENT', '#01-01', '757632', {storybooks: true, textbooks: true}],
        ['Chong Pang CC', '126, Yishun Street 11', '#01-427', '760126', {storybooks: true, textbooks: true}],
        ['Fernvale CC', '21, SENGKANG WEST AVENUE', '#01-01', '797650', {storybooks: true, textbooks: true}],
        ['Nee Soon Central CC', '1, NORTHPOINT DRIVE', '#01-201', '768019', {storybooks: true, textbooks: true}],
        ['Nee Soon East CC', '1, YISHUN AVE 9', '', '768893', {storybooks: true, textbooks: true}],
        ['Nee Soon Link CC', '413, Yishun Ring Road', '#01-1887', '760413', {storybooks: true, textbooks: true}],
        ['Nee Soon South CC', '30, Yishun Street 81', '', '768455', {storybooks: true, textbooks: true}],
        ['PAssion WaVe @ Sembawang', '60, JALAN MEMPURONG', '', '759058', {storybooks: false, textbooks: true}],
        ['Woodgrove-Fuchun CC', '353, WOODLANDS AVENUE 1', '#01-753', '730353', {storybooks: true, textbooks: true}],
        ['Woodlands CC', '832, WOODLANDS STREET 83', '#01-65', '730832', {storybooks: true, textbooks: true}],
        ['Woodlands Galaxy CC', '31, WOODLANDS AVENUE 6', '#1-1', '738991', {storybooks: true, textbooks: true}]
    ],
    '80-89': [
        ['One Punggol CC', '1 Punggol Drive', '#01-01', '828629', {storybooks: true, textbooks: true}],
        ['Punggol 21 CC', '80 PUNGGOL FIELD', '#01-01', '828815', {storybooks: true, textbooks: true}],
        ['Punggol West CC', '259C, PUNGGOL FIELD', '#01-47', '823259', {storybooks: true, textbooks: true}]
    ]
};

// Utility function to show error messages
function showError(message) {
    const errorModal = document.getElementById('errorModal');
    errorModal.textContent = message;
    errorModal.style.display = 'block';
    
    setTimeout(() => {
        errorModal.style.display = 'none';
    }, 3000);
}

// Function to determine postal code range
function getPostalRange(postalCode) {
    const prefix = postalCode.substring(0, 2);
    if (prefix === '01') return '01';
    if (prefix >= '10' && prefix <= '19') return '10-19';
    if (prefix >= '20' && prefix <= '29') return '20-29';
    if (prefix >= '30' && prefix <= '39') return '30-39';
    if (prefix >= '40' && prefix <= '49') return '40-49';
    if (prefix >= '50' && prefix <= '59') return '50-59';
    if (prefix >= '60' && prefix <= '69') return '60-69';
    if (prefix >= '70' && prefix <= '79') return '70-79';
    if (prefix >= '80' && prefix <= '89') return '80-89';
    return null;
}

// Function to filter locations by selected book types
function filterLocationsByBookType(locations, storybooks, textbooks) {
    return locations.filter(location => {
        const bookTypes = location[4]; // Get the book types object
        return (storybooks && bookTypes.storybooks) || (textbooks && bookTypes.textbooks);
    });
}

// Function to sort locations by postal code
function sortLocationsByPostalCode(locations) {
    return [...locations].sort((a, b) => {
        // Postal code is at index 3 in each location array
        return a[3].localeCompare(b[3]);
    });
}

// Function to get string representation of available books
function getBookTypesString(bookTypes) {
    const types = [];
    if (bookTypes.storybooks) types.push('Storybooks');
    if (bookTypes.textbooks) types.push('Textbooks');
    return types.length > 0 ? types.join(', ') : 'None available';
}

// Form submission event handler
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error displays
    document.getElementById('postalError').style.display = 'none';
    document.getElementById('bookTypeError').style.display = 'none';
    
    // Get form values
    const postalCode = document.getElementById('postalCode').value;
    const storybooks = document.getElementById('storybooks').checked;
    const textbooks = document.getElementById('textbooks').checked;
    
    // Validate postal code
    if (!postalCode.match(/^[0-9]{6}$/) || 
        parseInt(postalCode) < 10000 || 
        parseInt(postalCode) > 999999) {
        document.getElementById('postalError').style.display = 'block';
        showError('Please enter a valid postal code between 010000 to 999999');
        return;
    }
    
    // Validate book type selection
    if (!storybooks && !textbooks) {
        document.getElementById('bookTypeError').style.display = 'block';
        showError('Please select at least one book type');
        return;
    }
    
    // Process search
    const range = getPostalRange(postalCode);
    const resultsTable = document.getElementById('resultsTable');
    const resultsBody = document.getElementById('resultsBody');
    
    // Clear previous results
    resultsBody.innerHTML = '';
    
    if (range && communityClubsData[range]) {
        // Filter and sort the results
        const filteredLocations = filterLocationsByBookType(communityClubsData[range], storybooks, textbooks);
        const sortedLocations = sortLocationsByPostalCode(filteredLocations);
        
        if (sortedLocations.length === 0) {
            resultsTable.style.display = 'none';
            showError('No community clubs found with the selected book types in this area.');
            return;
        }
        
        // Display results
        sortedLocations.forEach(location => {
            const row = document.createElement('tr');
            
            // Add name, address, unit, postal code
            location.slice(0, 4).forEach((cell, index) => {
                const td = document.createElement('td');
                if (index === 2 && (!cell || cell.trim() === '')) {
                    td.textContent = '-';
                } else {
                    td.textContent = cell;
                }
                row.appendChild(td);
            });
            
            // Add available books column
            const bookTypesCell = document.createElement('td');
            bookTypesCell.textContent = getBookTypesString(location[4]);
            row.appendChild(bookTypesCell);
            
            resultsBody.appendChild(row);
        });
        
        resultsTable.style.display = 'table';
    } else {
        resultsTable.style.display = 'none';
        showError('No community clubs found in this area.');
    }
});

// Real-time postal code validation
document.getElementById('postalCode').addEventListener('input', function(e) {
    const value = e.target.value;
    e.target.value = value.replace(/[^0-9]/g, '');
    if (value.length > 6) {
        e.target.value = value.slice(0, 6);
    }
});