export interface UserInfo {
    id: number;
    token: string,
    name: Name;
    login: string;
    password: string;
}

interface Name {
    first: string;
    last: string;
}

export interface Login {
    login: string;
    password: string;
}

export interface Token {
    token: string
}