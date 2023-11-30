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
  key: number;
  title: string;
  mock: Category[];
};

export type Category = {
  key: string;
  value: string;
};
