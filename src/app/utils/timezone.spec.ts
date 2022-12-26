import { getTimezoneLocation, getTimezoneOffset } from './timezone';

describe('Timezone utils', () => {
  describe('getTimezoneOffset', () => {
    it('should return "-3" when it is "America/Sao_Paulo', () => {
      const result = getTimezoneOffset('America/Sao_Paulo');
      expect(result).toBe('-3');
    });

    it('should return "+1" when it is "Europe/Lisbon', () => {
      const result = getTimezoneOffset('Europe/Lisbon');
      expect(result).toBe('+1');
    });

    it('should return null when it is anything else', () => {
      const result = getTimezoneOffset('not a timezone');
      expect(result).toBe(null);
    });
  });

  describe('getTimezoneLocation', () => {
    it('should return "São Paulo" when it is "America/Sao_Paulo', () => {
      const result = getTimezoneLocation('America/Sao_Paulo');
      expect(result).toBe('São Paulo');
    });

    it('should return "Lisboa" when it is "Europe/Lisbon', () => {
      const result = getTimezoneLocation('Europe/Lisbon');
      expect(result).toBe('Lisboa');
    });

    it('should return null when it is anything else', () => {
      const result = getTimezoneLocation('not a timezone');
      expect(result).toBe(null);
    });
  });
});
