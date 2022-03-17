// Determine if a file is a jpeg
export const fileIsJpeg = (file) => {
  if (file.type === 'image/jpeg') {
    return true;
  }
  return false;
};

// Convert a latitude longitude position from DMS(degrees, minutes, seconds) to DD(decimal degrees)
export const convertDMSToDD = (degrees, minutes, seconds, direction) => {
  let dd = Number(degrees) + Number(minutes) / 60 + Number(seconds) / (60 * 60);

  if (
    direction === 'S'
    || direction === 'W'
    || direction === 's'
    || direction === 'w'
  ) {
    dd *= -1;
  } // Don't do anything for N or E
  return dd;
};

// Get raw longitude and latitude data from a file's metadata
export const parseDMS = (input) => {
  const {
    GPSLatitude, GPSLongitude, GPSLatitudeRef, GPSLongitudeRef,
  } = input;
  if (GPSLatitude !== undefined && GPSLongitude !== undefined) {
    const lat = convertDMSToDD(
      GPSLatitude[0],
      GPSLatitude[1],
      GPSLatitude[2],
      GPSLatitudeRef,
    );
    const lon = convertDMSToDD(
      GPSLongitude[0],
      GPSLongitude[1],
      GPSLongitude[2],
      GPSLongitudeRef,
    );

    return {
      Latitude: lat,
      Longitude: lon,
      Position: `${lat},${lon}`,
    };
  }
  return false;
};
