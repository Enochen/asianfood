export type UserReview = {
  rating: number;
  review: string;
};

export type BaseRecipe = {
  id: number;
  name: string;
  description: string;
  img_link: string;
  avg_rating: number;
};

export type FullRecipe = BaseRecipe & {
  tags: string[];
  minutes: number;
  ingredients: string[];
  steps: string[];
  user_data: UserReview[];
};
