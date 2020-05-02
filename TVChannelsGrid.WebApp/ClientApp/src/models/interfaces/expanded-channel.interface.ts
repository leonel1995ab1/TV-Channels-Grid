import { SafeResourceUrl } from '@angular/platform-browser';

export class ExpandedChannel {
    description: string;
    base64Logo: SafeResourceUrl;
    englishUrl: string;
    spanishUrl: string;

    constructor() {
        this.description = '';
        this.base64Logo = '';
        this.englishUrl = '';
        this.spanishUrl = '';
    }
}