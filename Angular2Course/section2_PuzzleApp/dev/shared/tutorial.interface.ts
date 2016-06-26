import {Item} from "./item.interface";
export interface Tutorial extends Item{
    title: string;
    description: string;
    id: string;
    url: string;
    type: string;
}