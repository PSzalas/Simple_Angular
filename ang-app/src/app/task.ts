export interface ITask {
    label: string;
    isDone: boolean;
    deadline?: Date;
}

export class Task implements ITask {
    label: string;
    isDone: boolean;
    deadline?: Date;

    constructor(label?: string, isDone?: boolean) {
        this.label = label || "default";
        this.isDone = !!isDone; 
    }

}