import type { RagnarokItemDetails } from "$lib/services/RagnarokItemDetails";
import type { RagnarokItemUseRef } from "$lib/services/RagnarokItemUseRef";

export type RagnarokItem = {
    id: number;
    name: string;
    details: RagnarokItemDetails;
    references: RagnarokItemUseRef[];
};