/// <reference types="multer" />
export interface ICreateEventDto {
    readonly topic: string;
    readonly startDate: string;
    readonly coverImage: Express.Multer.File | null;
    readonly description: string;
}
//# sourceMappingURL=create-event.dto.d.ts.map