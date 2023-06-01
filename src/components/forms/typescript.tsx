import { HTMLInputTypeAttribute } from "react";

export type INPUT_DATA = {
    name: string;
    label: string;
    type: HTMLInputTypeAttribute | INPUT_ENUM;
    required: boolean;
    registerParams?: any
};

export enum INPUT_ENUM {
    SELECT_USER = "select-user"
}
