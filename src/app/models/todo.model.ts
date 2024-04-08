export namespace NTodo {

    export interface TodoData {
        title:       string;
        description: string;
        status:      string;
        priority:    number;
        hidden: boolean;
        id: number;
        deadLine: string;
        progress: number;
        color:       TodoConfig;
        class:       TodoConfig;
    }
    
    export interface TodoConfig {
        status:   string;
        priority: string;
    }
    
    export enum Priority {
        HIGH = 1,
        MEDIUM = 2,
        LOW = 3
    }

    export enum PriorityText {
        HIGH = 'Alta',
        MEDIUM = 'Media',
        LOW = 'Baja'
    }

    export enum Range {
        LOW = 30,
        MEDIUM = 60,
        HIGH = 100
    }

    export enum RangeText {
        LOW = 'low',
        MEDIUM = 'medium',
        HIGH = 'high'
    }
}