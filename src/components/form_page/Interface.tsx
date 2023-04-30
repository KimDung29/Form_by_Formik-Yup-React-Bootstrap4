export default interface UserType {
  id: string;
  fullName: string;
  object: string;
  dateOfBirth: string;
  genders: string;
  nationalities: string;
  nationIDorPassportID: string;
  provinces: string;
  district: string;
  address: string;
  email: string;
  mobile: string;
  fiber: boolean;
  fever: boolean;
  soreThroat: boolean;
  picked: boolean;
  difficultyOfBreathing: boolean;
  travels: string[];
  departureDate: string;
  immigrationDate: string;
  departure: string;
  destination: string;
}
