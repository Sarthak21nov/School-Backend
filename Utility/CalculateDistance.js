export const CalculateDistance = (lat1, lon1, lat2, lon2) => {

    const toRadians = (degree) => (degree * Math.PI) / 180;

    // Radius of the Earth in kilometers
    const R = 6371;

    // Difference between latitudes and longitudes
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    // Haversine formula
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
            Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    
    // If the distance is invalid, return null
    return isNaN(distance) ? null : distance;
} 