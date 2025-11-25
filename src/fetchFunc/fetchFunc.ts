import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

import type { Note } from "../types/types";

interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchFuncParams {
  // page?: number;
  topic?: string;
}

export const fetchFunc = async (topic: string): Promise<NotesResponse> => {
  const response = await axios.get(
    `https://notehub-public.goit.study/api/notes?page=1&perPage=12&sortBy=created`,
    {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'search': topic,
        // 'page': page,
      },
    }
  );
  console.log(response.data);
  
  return response.data;
};
