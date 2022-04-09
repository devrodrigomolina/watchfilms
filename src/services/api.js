import axios from 'axios'
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTYxNDM3ZGQwYWZlYjA4OGZjN2JjNzdiZTRkMzJiYyIsInN1YiI6IjYyNDBjMzgxYzc0MGQ5MDA1ZDczMDI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2exlzwS5mWJYbHHdhSXdB9vdMY1dllQuSWi0bncaIOs';

const axiosIntance = axios.create ({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export const api = {
  get(endpoint) {
    return axiosIntance.get(endpoint)
  }
}