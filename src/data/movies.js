const showtimes = ['10:30 AM', '1:45 PM', '4:30 PM', '7:15 PM', '10:00 PM']

function upcomingDates(days = 5) {
  return Array.from({ length: days }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() + index)
    return date.toISOString().slice(0, 10)
  })
}

export const movies = [
  {
    id: 'dune-part-two',
    title: 'Dune: Part Two',
    genre: ['Sci-Fi', 'Adventure'],
    rating: 8.6,
    duration: 166,
    language: 'English',
    certificate: 'UA',
    price: 320,
    featured: true,
    poster:
      'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    backdrop:
      'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
    synopsis:
      'Paul Atreides unites with the Fremen to avenge his family and prevent a terrible future only he can foresee.',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
    director: 'Denis Villeneuve',
  },
  {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    genre: ['Biography', 'Drama'],
    rating: 8.3,
    duration: 180,
    language: 'English',
    certificate: 'UA',
    price: 300,
    featured: false,
    poster:
      'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdrop:
      'https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg',
    synopsis:
      'The story of J. Robert Oppenheimer and the world-changing creation of the atomic bomb.',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
    director: 'Christopher Nolan',
  },
  {
    id: 'interstellar',
    title: 'Interstellar',
    genre: ['Sci-Fi', 'Drama'],
    rating: 8.7,
    duration: 169,
    language: 'English',
    certificate: 'UA',
    price: 280,
    featured: false,
    poster:
      'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdrop:
      'https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    synopsis:
      'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    director: 'Christopher Nolan',
  },
  {
    id: 'the-dark-knight',
    title: 'The Dark Knight',
    genre: ['Action', 'Crime'],
    rating: 9.0,
    duration: 152,
    language: 'English',
    certificate: 'UA',
    price: 270,
    featured: false,
    poster:
      'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop:
      'https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg',
    synopsis:
      'Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    director: 'Christopher Nolan',
  },
  {
    id: 'inception',
    title: 'Inception',
    genre: ['Sci-Fi', 'Thriller'],
    rating: 8.8,
    duration: 148,
    language: 'English',
    certificate: 'UA',
    price: 290,
    featured: false,
    poster:
      'https://image.tmdb.org/t/p/w500/oYuLEt3zNKsJVlQLNvYGVkAUZdE.jpg',
    backdrop:
      'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    synopsis:
      'A skilled thief is given a chance at redemption if he can plant an idea into a target’s subconscious.',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    director: 'Christopher Nolan',
  },
  {
    id: 'spider-verse',
    title: 'Spider-Man: Across the Spider-Verse',
    genre: ['Animation', 'Action'],
    rating: 8.6,
    duration: 140,
    language: 'English',
    certificate: 'U',
    price: 260,
    featured: false,
    poster:
      'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    backdrop:
      'https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9BD.jpg',
    synopsis:
      'Miles Morales catapults across the Multiverse, meeting a team of Spider-People protecting its very existence.',
    cast: ['Shameik Moore', 'Hailee Steinfeld', 'Oscar Isaac'],
    director: 'Joaquim Dos Santos',
  },
  {
    id: 'poor-things',
    title: 'Poor Things',
    genre: ['Comedy', 'Romance'],
    rating: 7.8,
    duration: 141,
    language: 'English',
    certificate: 'A',
    price: 310,
    featured: false,
    poster:
      'https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg',
    backdrop:
      'https://image.tmdb.org/t/p/original/bQS43HSLZzMjlmLQhR8RoF4r7D4.jpg',
    synopsis:
      'Bella Baxter runs away with a suitor to embark on an odyssey of self-discovery across continents.',
    cast: ['Emma Stone', 'Mark Ruffalo', 'Willem Dafoe'],
    director: 'Yorgos Lanthimos',
  },
  {
    id: 'john-wick-4',
    title: 'John Wick: Chapter 4',
    genre: ['Action', 'Thriller'],
    rating: 7.7,
    duration: 169,
    language: 'English',
    certificate: 'A',
    price: 300,
    featured: false,
    poster:
      'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
    backdrop:
      'https://image.tmdb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg',
    synopsis:
      'John Wick uncovers a path to defeating The High Table, but before he can earn his freedom he must face a new enemy.',
    cast: ['Keanu Reeves', 'Donnie Yen', 'Bill Skarsgård'],
    director: 'Chad Stahelski',
  },
  {
    id: 'la-la-land',
    title: 'La La Land',
    genre: ['Musical', 'Romance'],
    rating: 8.0,
    duration: 128,
    language: 'English',
    certificate: 'U',
    price: 240,
    featured: false,
    poster:
      'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS8f9mjGEuzsj.jpg',
    backdrop:
      'https://image.tmdb.org/t/p/original/qJeU7KM4nT2C1WpOrwJSqGtuJOj.jpg',
    synopsis:
      'A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles.',
    cast: ['Ryan Gosling', 'Emma Stone', 'John Legend'],
    director: 'Damien Chazelle',
  },
  {
    id: 'parasite',
    title: 'Parasite',
    genre: ['Thriller', 'Drama'],
    rating: 8.5,
    duration: 132,
    language: 'Korean',
    certificate: 'A',
    price: 250,
    featured: false,
    poster:
      'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAFeKfekN27V4.jpg',
    backdrop:
      'https://image.tmdb.org/t/p/original/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg',
    synopsis:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    cast: ['Song Kang-ho', 'Choi Woo-shik', 'Park So-dam'],
    director: 'Bong Joon-ho',
  },
].map((movie, index) => ({
  ...movie,
  dates: upcomingDates(),
  showtimes: showtimes.filter((_, showIndex) => (showIndex + index) % 2 === 0 || showIndex === 3),
}))

export const genres = [
  'All',
  ...Array.from(new Set(movies.flatMap((movie) => movie.genre))).sort(),
]
