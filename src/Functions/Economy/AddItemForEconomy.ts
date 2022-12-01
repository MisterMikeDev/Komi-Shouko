import chalk from "chalk";
import { Item } from "../../Interfaces";
import itemData from "../../Schemas/ItemData";
export let AddItemForEconomy = async (
    isAdded: boolean,
    idOfObject: number,
    itemObject: Item
): Promise<void> => {
    if (!isAdded) {
        let findItem = await itemData.findOne({
            id: idOfObject,
        });
        if (!findItem) {
            let newItem = new itemData({
                id: idOfObject,
                Item: itemObject,
            });
            await newItem.save();
            console.log(
                `${chalk.greenBright("[SUCCESS]")} Se agregó un nuevo item!!!`
            );
        } else {
            console.log(
                `${chalk.redBright(
                    "[ERROR]"
                )} Ya existe un item con la id "${idOfObject}"!!!`
            );
        }
    }
};
