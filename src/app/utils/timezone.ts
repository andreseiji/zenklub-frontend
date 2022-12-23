export function getTimezoneOffset(timezone: string): string | null {
  switch (timezone) {
    case 'America/Sao_Paulo':
      return '-3';
    case 'Europe/Lisbon':
      return '+1';
    default:
      return null;
  }
}
