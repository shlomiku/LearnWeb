import {Category} from "../category.interface";
import {
    TYPE_COMPLETE, TYPE_INTRODUCTION, TYPE_DIRECTIVES, TYPE_FORMS,
    TYPE_ROUTING, TYPE_HTTP, TYPE_OTHER
} from "./tutorials.data";

export const CATEGORIES: Category[] = [
    {title: 'Complete', description: 'A list of Tutorials offering a complete guide through Angular 2', type: TYPE_COMPLETE},
    {title: 'Introduction', description: 'Tutorials which will give you a great introduction to Angular 2', type: TYPE_INTRODUCTION},
    {title: 'Directives & Components', description: 'Tutorials focused on directives, components or databinding', type: TYPE_DIRECTIVES},
    {title: 'Forms', description: 'Tutorials focused on Forms in Angular 2', type: TYPE_FORMS},
    {title: 'Routing', description: 'Tutorials focused on Routing', type: TYPE_ROUTING},
    {title: 'HTTP', description: 'Tutorials focused on HTTP access', type: TYPE_HTTP},
    {title: 'Other', description: 'Other, mostly advanced, tutorials on Angular 2', type: TYPE_OTHER},
];