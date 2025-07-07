export interface BookAuthorGenre {
  id: number;
  title: string;
  cover_pic: string;
  price:number;
  overview:string;
  publisher:string;
  page_count:number;
  language:string;
  isbn:string;
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
