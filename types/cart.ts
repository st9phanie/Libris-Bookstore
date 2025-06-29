import { UUID } from "crypto";

export interface CartProps {
  uid: UUID;
  quantity: number;
  price:number;
  ebookAuthor: {
    authors: {
      firstname?: string;
      lastname?: string;
      middlename?: string;
    };
  }[];
  ebookGenres: {
    genres: {
       id: number;
      genre: string;
    };
  }[];
}
