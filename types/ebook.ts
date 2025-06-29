export interface ebookAuthorGenre {
  id: number;
  title: string;
  cover_pic: string;
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
