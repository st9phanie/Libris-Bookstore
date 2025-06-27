export interface BookAuthorGenre {
  id: number;
  title: string;
  cover_pic: string;
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
