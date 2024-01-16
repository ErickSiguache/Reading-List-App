export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: AuthorProps
}

export interface AuthorProps {
  name: string
  otherBooks: string[]
}
