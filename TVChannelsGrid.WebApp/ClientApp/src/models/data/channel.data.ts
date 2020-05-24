export interface ChannelData {
    id: number;
    name: string;
    code: string;
    description: string;
    categoryId: number;
    englishCategoryDesc?: string;
    spanishCategoryDesc?: string;
    base64Logo: string;
    englishUrl: string;
    spanishUrl: string;
    isSD: boolean;
    isHD: boolean;
    is4K: boolean;
    is3D: boolean;
}