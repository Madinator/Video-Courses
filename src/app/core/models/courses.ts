export interface Course {
    id: number;
    name: string;
    date: Date;
    length: number;
    description: string;
    authors: Author[];
    isTopRated: boolean;

}

export interface CourseResponse {
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: Author[];
    isTopRated: boolean;
}

export interface CourseRequest {
    name: string;
    date: Date;
    length: number;
    description: string;
    authors: Author[];
    isTopRated: boolean;
}

export interface Author {
    id: number;
    name: string;
}

export enum CourseActionType {
    Add = 'ADD',
    Edit = 'Edit'
}
