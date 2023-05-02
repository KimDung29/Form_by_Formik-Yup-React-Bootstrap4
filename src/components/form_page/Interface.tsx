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

export const fakeData: UserType[] = [
  {
    id: "_0.wk",
    fullName: "Kim Mors",
    object: "Expert",
    dateOfBirth: "2000/3/ 12",
    genders: "Male",
    provinces: "Hà Nội",
    nationalities: "",
    nationIDorPassportID: "",
    district: "",
    address: "",
    email: "",
    mobile: "",
    fiber: false,
    fever: false,
    soreThroat: false,
    picked: false,
    difficultyOfBreathing: false,
    travels: [],
    departureDate: "",
    immigrationDate: "",
    departure: "",
    destination: "",
  },
  {
    id: "_0.ko",
    fullName: "Jane Kim",
    object: "Expert",
    dateOfBirth: "2005/8/ 2",
    genders: "Male",
    provinces: "Hà Nội",
    nationalities: "",
    nationIDorPassportID: "",
    district: "",
    address: "",
    email: "",
    mobile: "",
    fiber: false,
    fever: false,
    soreThroat: false,
    picked: false,
    difficultyOfBreathing: false,
    travels: [],
    departureDate: "",
    immigrationDate: "",
    departure: "",
    destination: "",
  },
];
