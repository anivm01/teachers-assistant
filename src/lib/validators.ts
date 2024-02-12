import { z } from 'zod';

export const productTypeEnum = z.enum(['Free', 'Premium']);

export const CategorySchema = z.object({
    category: z.string(),
});

export const FileSchema = z.object({
    fileName: z.string(),
    url: z.string(),
    fileType: z.string().optional(),
});

export const DownloadableProductSchema = z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    type: productTypeEnum.optional(),
    files: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    featuredImageId: z.string().optional(),
});

// TypeScript types remain accurately inferred from the simplified schemas
export type ProductType = z.infer<typeof productTypeEnum>;
export type CategoryType = z.infer<typeof CategorySchema>;
export type FileType = z.infer<typeof FileSchema>;
export type DownloadableProductType = z.infer<typeof DownloadableProductSchema>;
