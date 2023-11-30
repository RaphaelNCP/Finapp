import { SetStateAction } from "react";

export type TextProps = {
  as: string;
  size: number;
  align: "left" | "center" | "right";
};

export type HomeItemProps = {
  title: string;
  value: string;
};

export type TabOptionsProps = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export type AddsProps = {
  title: string;
  mock: Category[];
};

export type CardProps = {
  id: string;
  value: string;
  description: string;
  category: string;
};

export type CardListProps = {
  cards: CardProps[];
  onPress: () => void;
};

export type Category = {
  key: string;
  value: string;
};
