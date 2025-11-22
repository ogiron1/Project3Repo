// Wait for DOM to load before executing
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for contact button
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert('If you have questions, contact me at:\nogiron1@hawk.illinoistech.edu');
        });
    }
});

// Initialize Google Map
function initMap() {
    // Center map on Chicago (Illinois Tech area)
    const centerLocation = { lat: 41.8349, lng: -87.6270 };
    
    // Create map with custom styling
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: centerLocation,
        mapTypeId: 'roadmap',
        // Feature 1: Map type control with satellite option
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER,
            mapTypeIds: ['roadmap', 'satellite']
        }
    });
    
    // Feature 2: Multiple custom markers
    const locations = [
        {
            position: { lat: 41.8349, lng: -87.6270 },
            title: 'Illinois Institute of Technology',
            description: 'Where I study web development'
        },
        {
            position: { lat: 41.8781, lng: -87.6298 },
            title: 'Downtown Chicago',
            description: 'Chicago city center'
        },
        {
            position: { lat: 41.8902, lng: -87.6215 },
            title: 'Navy Pier',
            description: 'Famous Chicago landmark'
        }
    ];
    
    // Feature 3: Interactive info windows
    locations.forEach(function(loc) {
        const marker = new google.maps.Marker({
            position: loc.position,
            map: map,
            title: loc.title,
            animation: google.maps.Animation.DROP
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: '<div style="padding: 10px;"><h3 style="margin: 0 0 5px 0;">' + 
                     loc.title + '</h3><p style="margin: 0;">' + 
                     loc.description + '</p></div>'
        });
        
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    });
}