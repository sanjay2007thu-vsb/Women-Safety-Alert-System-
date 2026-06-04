function sendSOS() {

    navigator.geolocation.getCurrentPosition(
        function(position) {

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            alert(
                "SOS Alert Sent!\nLatitude: " +
                lat +
                "\nLongitude: " +
                lon
            );

        },
        function() {
            alert("Location access denied");
        }
    );

}
