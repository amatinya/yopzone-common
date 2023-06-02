export interface IUpdateEventDto {
    readonly topic?: string;
    readonly startDate?: string;
    readonly coverImage?: Express.Multer.File | null;
    readonly description?: string;
    readonly location?: string;
}
