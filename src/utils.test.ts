import { fileIsJpeg } from './utils';

const jpegFile = { type: 'image/jpeg' };
const pngFile = { type: 'image/png' };
const pdfFile = { type: 'pdf' };
const emptyFile = {};

describe('Utils functions', () => {
  describe('fileIsJpeg function', () => {
    test('should return true for image/jpeg', () => {
      expect(fileIsJpeg(jpegFile)).toBe(true);
    });

    test('should return false for pdf', () => {
      expect(fileIsJpeg(pngFile)).toBe(false);
    });

    test('should return false for pdf', () => {
      expect(fileIsJpeg(pdfFile)).toBe(false);
    });

    test('should return false for undefined', () => {
      expect(fileIsJpeg(emptyFile)).toBe(false);
    });
  });
});
