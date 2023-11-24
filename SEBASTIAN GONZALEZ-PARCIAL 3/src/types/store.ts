import { user } from "./info";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  user:user[];
};

export enum SomeActions {
  "SAVE_INFO" = "SAVE_INFO",
}

export interface SaveAction {
  action: SomeActions.SAVE_INFO;
  payload:  user;
}

export type Actions = SaveAction;
