/// <reference types="multer" />
export interface IUpdateEventDto {
    readonly topic?: string;
    readonly startDate?: string;
    readonly coverImage?: Express.Multer.File | null;
    readonly description?: string;
    readonly location?: string;
}
//# sourceMappingURL=update-event.dto.d.ts.map