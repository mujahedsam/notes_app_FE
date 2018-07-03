import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GetlocalnotesdataService {

    notesData: {
        id: number,
        name: string,
        content: string
    };
    constructor() { }

    public saveNotesInfo(notes) {
        this.notesData = notes;
    }

    public getNotesInfo() {
        return this.notesData;
    }
}
