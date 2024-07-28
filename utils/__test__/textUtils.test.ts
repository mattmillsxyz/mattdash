import { capitalize } from '../textUtils';

describe('textUtils', () => {
  describe('capitalize', () => {
    // Valid parameter tests
    it('should return capitalized string', () => {
      const result = capitalize('zimbabwe');
      expect(result).toBe('Zimbabwe');
    });

    it('should return captialized sentence', () => {
      const result = capitalize('this sentence need to be capitalized.');
      expect(result).toBe('This sentence need to be capitalized.');
    });

    // Invalid parameter tests
    it('should return null', () => {
      const result = capitalize(null as any);
      expect(result).toBeNull();
    });

    it('should return undefined', () => {
      const result = capitalize(undefined as any);
      expect(result).toBeUndefined();
    });

    it('should return number', () => {
      const result = capitalize(100 as any);
      expect(result).toBe(100);
    });
  });
});
