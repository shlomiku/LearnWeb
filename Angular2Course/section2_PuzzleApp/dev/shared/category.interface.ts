import {Item} from "./item.interface";
export interface Category extends Item {
    title: string,
    description: string,
    type: string
}