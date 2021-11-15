// Determine if a file is a jpeg
const fileIsJpeg = (file) => {
  if (file.type === 'image/jpeg') {
    return true;
  }
  return false;
};

export default fileIsJpeg;
