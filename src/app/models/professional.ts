type ProfessionalPrice = {
  currency: 'BRL' | 'USD';
  value: number;
  durationInMinutes: number;
};

export type Professional = {
  id: string;
  city?: string;
  description?: string;
  name: string;
  price: ProfessionalPrice;
  profileImage?: string;
  rating: number | null;
  reviewsAmount: number;
  specialization: 'Psicologia' | 'Psicanálise' | 'Terapia' | 'Coach';
} | null;
