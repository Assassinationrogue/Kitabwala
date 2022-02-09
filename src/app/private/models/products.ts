export interface Product {
  stationary: Stationary;
}

export interface Stationary {
  books: Books;
  noteBooks: NoteBooks;
  others: Others;
}

export interface Books {
  [key: string]: Book;
}

export interface Book {
  title: string;
  subtitle?: string;
  publisher: string;
  price: Number;
  writer: String;
  edition: String;
  type: String;
  rating: Number;
  inStock: Boolean;
  quantity: Number;
  pages: String;
  currency: String;
  language: String;
  publicationDate: Date;
  countryOfOrigin: String;
  isbn10: String;
  isbn13: String;
  weight: Number;
  unit: Number;
  imageUrl: String;
  description: String;
}

export interface Others {
  [key: string]: Other;
}

export interface Other {
  title: string;
  subtitle?: string;
  price: Number;
  currency: String;
  rating: Number;
  weight: Number;
  inStock: Boolean;
  countryOfOrigin: String;
  unit: String;
  imageUrl: String;
  description: String;
  setType: String;
  setQuantity: Number;
  brand: String;
  material: String;
  color?: String;
}

export interface NoteBooks {
  [key: string]: NoteBook;
}

export interface NoteBook {
  title: string;
  subtitle?: string;
  price: Number;
  currency: String;
  rating: Number;
  weight: Number;
  inStock: Boolean;
  countryOfOrigin: String;
  unit: String;
  imageUrl: String;
  description: String;
  ruling: String;
  asin: String;
}


export interface CheckoutPageState {
  page: number,
  state: string
}