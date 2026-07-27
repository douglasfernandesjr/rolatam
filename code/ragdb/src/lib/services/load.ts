import itemDB from '$lib/data/itemDB.json';
import refDB from '$lib/data/referenceDB.json';

import type { RagnarokItemDetails } from "$lib/services/RagnarokItemDetails";
import type { RagnarokItemUseRef } from "$lib/services/RagnarokItemUseRef";
import type { RagnarokItem } from "$lib/services/RagnarokItem";


//Ref Index

let refIndexDb: Array<RagnarokItemUseRef> = [];
let completeItemDB: Array<RagnarokItem> = [];

function createRef(inputRef: any): RagnarokItemUseRef {
    return {
        id: inputRef.id,
        url: inputRef.url,
        name: inputRef.nome,
        type: inputRef.type
    }
}

function createItem(item: any): RagnarokItem {

    let refs: RagnarokItemUseRef[] = [];

    item.referenceIds.forEach((index: number) => {
        refs.push(refIndexDb[index]);
    });

    let details: RagnarokItemDetails = {
        normalDrop: item.details.normalDrop || false,
        questDrop: item.details.questDrop || false,
        buyInNPC: item.details.buyInNPC || false
    };

    return {
        id: item.id,
        name: item.name,
        details: details,
        references: refs
    }
}


refDB.forEach(element => {
    refIndexDb[element.id] = createRef(element);
});


itemDB.forEach(element => {
    completeItemDB.push(createItem(element));
});

export const load = completeItemDB;