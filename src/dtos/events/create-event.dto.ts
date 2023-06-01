export interface ICreateEventDto {
    readonly topic: string;
    readonly startDate: string;
    readonly coverImage: Express.Multer.File;
    readonly description: string;
}
