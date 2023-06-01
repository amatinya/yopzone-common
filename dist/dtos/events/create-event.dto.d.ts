/// <reference types="multer" />
export interface ICreateEventDto {
    readonly topic: string;
    readonly startDate: string;
    readonly coverImage: Express.Multer.File | null;
    readonly description: string;
    readonly location: string;
}
//# sourceMappingURL=create-event.dto.d.ts.map