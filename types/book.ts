export interface BookAuthorGenre {
  id: number;
  title: string;
  cover_pic: string;
  price:number;
  bookAuthor: {
    authors: {
      firstname?: string;
      lastname?: string;
      middlename?: string;
    };
  }[];
  bookGenres: {
    genres: {
       id: number;
      genre: string;
    };
  }[];
}
