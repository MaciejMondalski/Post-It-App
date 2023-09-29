export type PostType = {
  title: string;
  id: string;
  user: {
    email: string;
    id: string;
    name: string;
    image: string;
  };
  comment: {
    createdAt: string;
    id: string;
    postId: string;
    title: string;
    userId: string;
    user: {
      email: string;
      id: string;
      image: string;
      name: string;
    };
  }[];
};
