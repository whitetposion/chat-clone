import axios from 'axios';

const chatsById = async (chat_id) => {
  try {
    const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chat_id}`);
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

export default chatsById;
