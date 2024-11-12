export interface Worker {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  country: string;
  city: string;
  birthDate: string;
  imageUrl: string;
  localTime?: string;
  lat?: number;
  lon?: number;
}
