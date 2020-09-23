export const BASE_URL = "https://free.currconv.com/api/v7";
export const API_KEY = "bebe1c815b55fb796dc4";

export const handleErrors = (res) => {
  if (!res.ok) {
    throw Error('Something went wrong');
  }
  return res.json();
};