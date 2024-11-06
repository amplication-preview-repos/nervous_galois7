import { JsonValue } from "type-fest";
import { Menu } from "../menu/Menu";

export type MealPlan = {
  createdAt: Date;
  description: string | null;
  duration: number | null;
  id: string;
  image: JsonValue;
  menus?: Array<Menu>;
  price: number | null;
  title: string | null;
  updatedAt: Date;
};
