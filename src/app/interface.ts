export interface Dictionary<Type> {
  [key: string]: Type;
}
export const GenderDictionary: Dictionary<String> = {
  'Female': 'assets/female.svg',
  'Male': 'assets/male.svg',
  'Genderless': 'assets/agender.svg',
  'unknown': 'assets/unknown-gender.svg'
}
