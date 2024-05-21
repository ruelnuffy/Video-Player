// src/models/VideoPlaylist.ts

export interface Video {
    id: number;
    title: string;
    url: string;
    description: string;
  }
  
  const videoPlaylist: Video[] = [
    {
      id: 1,
      title: 'Introduction to React',
      url: 'https://www.example.com/videos/react-intro',
      description: 'An introductory video on React.',
    },
    {
      id: 2,
      title: 'React State Management',
      url: 'https://www.example.com/videos/react-state',
      description: 'A video on managing state in React.',
    },
    // Add more videos as needed
  ];
  
  export default videoPlaylist;
  