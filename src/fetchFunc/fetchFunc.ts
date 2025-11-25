import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

interface NotesResponse {
  items: any[]; // можешь расписать тип если есть документация
  page: number;
  perPage: number;
  total: number;
}

export const fetchFunc = async (): Promise<NotesResponse> => {
  const response = await axios.get(
    `https://notehub-public.goit.study/api/notes?page=1&perPage=12&sortBy=created`,
    {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    }
  );
  console.log(response.data);
  
  return response.data;
};
