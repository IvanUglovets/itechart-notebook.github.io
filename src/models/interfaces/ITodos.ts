export interface ITodo {
    userId?: number
    id: number | string
    title: string
    body?: string
    completed: boolean
}