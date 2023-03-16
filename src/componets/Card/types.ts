export type CardProps = {
     id?: string;
     character_id?: string;
     name?: string;
     status?: string;
     species?: string;
     image?: string;
     createdAt?: Date;
     handleDetails?: () => void;
     handleDelete?: () => void;
     handleUpdate?: () => void;
     handleCreate?: () => void;
     handleShowMore?: () => void;
};
