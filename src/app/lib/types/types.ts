// Тип для поста
export interface PostTypes {
  userId: number;
  id: number;
  title: string;
  body: string;
  userName?: string;
}

export interface ApiError {
  message: string;
  status?: number;
}
