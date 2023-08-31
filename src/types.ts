export interface Country {
    name: string;
    native: string;
    emoji: string;
    language: string;
    code: string;
    currency: string;
    capital: string;
    languages: {
        code: string,
        name: string
    }[]
}