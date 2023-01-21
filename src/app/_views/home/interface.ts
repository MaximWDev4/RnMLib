export interface CharCard {
  id: number,
  avatar: string,
  name: string,
  gender: string,
}

export interface Dictionary<Type> {
  [key: string]: Type;
}
