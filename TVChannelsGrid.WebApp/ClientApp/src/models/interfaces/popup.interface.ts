export interface Popup {
    title: string,
    content: string,
    buttons: PopupButtons[]
}

export interface PopupButtons {
    primary?: boolean, 
    text: string, 
    action?: Function
}