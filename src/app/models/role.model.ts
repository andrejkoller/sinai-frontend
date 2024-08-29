export interface Role {
    id: number;
    name: string;
    description: string;
    permission: Permission;
    created_at: Date;
    updated_at: Date;
}

export enum Permission {
}