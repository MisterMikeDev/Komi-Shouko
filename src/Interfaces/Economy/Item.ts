interface Cooldown {
    name: string;
    time: string;
}

export interface Item {
    id?: number;
    name: string;
    icon: string;
    description: string;
    rareLevel: number;
    minLevelRequired: number;
    amount: number;
    maxStack: number;
    prizeForBuy: number;
    prizeForSell: number;
    shopHidden: boolean;
    earnedBy: string;
}

export interface FightItem {
    id?: number;
    name: string;
    icon: string;
    description: string;
    rareLevel: number;
    minLevelRequired: number;
    amount: number;
    maxStack: number;
    prizeForBuy: number;
    prizeForSell: number;
    shopHidden: boolean;
    earnedBy: string;
    fight: {
        damage: number;
        cooldown: {
            name: string;
            time: string;
        };
    };
}

export interface MiningItem {
    id?: number;
    name: string;
    icon: string;
    description: string;
    rareLevel: number;
    minLevelRequired: number;
    amount: number;
    maxStack: number;
    prizeForBuy: number;
    prizeForSell: number;
    shopHidden: boolean;
    earnedBy: string;
    cooldown: Cooldown;
}

export interface FishingItem {
    id?: number;
    name: string;
    icon: string;
    description: string;
    rareLevel: number;
    minLevelRequired: number;
    amount: number;
    maxStack: number;
    prizeForBuy: number;
    prizeForSell: number;
    shopHidden: boolean;
    earnedBy: string;
    cooldown: Cooldown;
}

export interface FellingItem {
    id?: number;
    name: string;
    icon: string;
    description: string;
    rareLevel: number;
    minLevelRequired: number;
    amount: number;
    maxStack: number;
    prizeForBuy: number;
    prizeForSell: number;
    shopHidden: boolean;
    earnedBy: string;
    cooldown: Cooldown;
}

export interface PlowItem {
    id?: number;
    name: string;
    icon: string;
    description: string;
    rareLevel: number;
    minLevelRequired: number;
    amount: number;
    maxStack: number;
    prizeForBuy: number;
    prizeForSell: number;
    shopHidden: boolean;
    earnedBy: string;
    cooldown: Cooldown;
}
