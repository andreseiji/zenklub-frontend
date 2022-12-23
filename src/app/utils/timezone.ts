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

export function getTimezoneLocation(timezone: string): string | null {
  switch (timezone) {
    case 'America/Sao_Paulo':
      return 'São Paulo';
    case 'Europe/Lisbon':
      return 'Lisboa';
    default:
      return null;
  }
}
