document.addEventListener('DOMContentLoaded', function () {

    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function () {
            alert('If you have questions, contact me at:ogiron1@hawk.illinoistech.edu');
        });
    }

    if (document.getElementById('map')) {
        loadGoogleMapsAPI();
    }
});

function loadGoogleMapsAPI() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&loading=async&libraries=marker&callback=initMap';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

function initMap() {

    const centerLocation = { lat: 41.87304250665484, lng: - 87.62791435673566 };

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: centerLocation,
        mapTypeId: 'roadmap',
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER,
            mapTypeIds: ['roadmap', 'satellite']
        }
    });

    const locations = [
        {
            position: { lat: 41.87304250665484, lng: - 87.62791435673566},
            title: 'Jones College Prep',
            description: 'Oliver Giron GPA Factory',
            url: 'https://www.jonescollegeprep.org/'
        },
        {
            position: { lat: 41.865911466480945, lng: - 87.6623126094171 },
            title: 'The Farm',
            description: 'The site of shovel apotheosis',
            url: 'https://www.urbangrowerscollective.org/'
        },
        {
            position: { lat: 41.87406169267821, lng: - 87.61953040501061 },
            title: 'Grant Park',
            description: 'Optimal location to be jobless',
            url: 'https://www.chicagoparkdistrict.com/parks-facilities/grant-ulysses-park'
        }
    ];

    locations.forEach(function (loc) {
        const marker = new google.maps.Marker({
            position: loc.position,
            map: map,
            title: loc.title,
            animation: google.maps.Animation.DROP
        });

        const infoWindow = new google.maps.InfoWindow({
            content: '<div style="padding: 10px;"><h3 style="margin: 0 0 5px 0;">' +
                loc.title + '</h3><p style="margin: 0 0 8px 0;">' +
                loc.description + '</p><a href="' + loc.url +
                '" target="_blank" style="color: #004d99; font-weight: bold; text-decoration: none;">Visit Website</a></div>'
        });

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });
    });
}
