import axios from 'axios';

const fetchChats = async (page = 1) => {
  try {
    const response = await axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=${page}`);
    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error('Error fetching data');
    }
  } catch (error) {
    console.error('Error fetching chats:', error);
    return null;
  }
};

export default fetchChats;
