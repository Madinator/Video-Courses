export interface Card {
    id: number,
    title: string,
    creationDate: Date,
    duration: number,
    description: string,
    topRated: boolean,
}

export enum CourseActionType {
    Add = 'ADD',
    Edit = 'Edit'
}
