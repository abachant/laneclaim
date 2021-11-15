import fileIsJpeg from './utils';

const imgFile = { type: 'image/jpeg' };
const pngFile = { type: 'image/png' };
const pdfFile = { type: 'pdf' };
const emptyFile = {};

describe('Utils functions', () => {
  describe('fileIsJpeg function', () => {
    it('should return true for image/jpeg', () => {
      expect(fileIsJpeg(imgFile)).toBe(true);
    });

    it('should return false for pdf', () => {
      expect(fileIsJpeg(pngFile)).toBe(false);
    });

    it('should return false for pdf', () => {
      expect(fileIsJpeg(pdfFile)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(fileIsJpeg(emptyFile)).toBe(false);
    });
  });
});
