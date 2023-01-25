export interface ICar {
  name: string;
  color: string;
  id?: number;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export enum Pages {
  garage = "garage-page",
  winners = "winners-page",
  header = "header-page",
}
