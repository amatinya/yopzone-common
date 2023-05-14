export interface IResetUserPasswordDto {
    readonly email: string;
    readonly newPassword: string;
    readonly resetCode: string;
}
