export interface Worker {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  country: string;
  city: string;
  birthDate: Date;
  imageUrl: string;
  localTime?: string;
}
