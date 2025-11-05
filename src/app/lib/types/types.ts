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

export interface NavTypes {
  nav?: {
    home?: string;
    about?: string;
  };
}

export interface ErrorTypes {
  error?: {
    unk?: string;
    again?: string;
  };
}

export interface NotFoundTypes {
  notFound?: {
    title?: string;
    description?: string;
    notPost?: string;
  };
}

export interface CommonTypes {
  common?: {
    posts?: string;
    readMy?: string;
    user?: string;
    id?: string;
    clickButton?: string;
    return?: string;
    began?: string;
  };
}

export interface AboutTypes {
  about?: {
    name?: string;
    titleForName?: string;
    titleForEmail?: string;
    projectDescription?: string;
  };
}

export interface DictionaryTypes
  extends NavTypes,
    ErrorTypes,
    NotFoundTypes,
    CommonTypes,
    AboutTypes {}
