import { expect, test } from "@jest/globals";

/** RECORDATORIOS
 * - Hacer muchos tipos de permisos.
 * - Cuando no se tenga el permiso mandar un mensaje con un boton el cual mandaria la lista de permisos que requieres para ese comando.
 */
type Perms = keyof {
    user: string;
    permissionForUsers: string;
    permissionForChats: string;
    permissionForServer: string;
    adminPermission: string;
    onlyDev: string;
};

type Params = {
    CommandPermission: Perms;
    UserPermission: Perms;
};

const ANSWERS = {
    Good: "You have permission.",
    Bad: "You no have permission."
};

function PermissionChecker({ CommandPermission, UserPermission }: Params) {
    if (
        CommandPermission === "permissionForUsers" &&
        UserPermission === "permissionForUsers"
    ) {
        return ANSWERS.Good;
    }
    if (
        CommandPermission === "adminPermission" &&
        UserPermission === "adminPermission"
    ) {
        return ANSWERS.Good;
    }
    if (CommandPermission === "onlyDev" && UserPermission === "onlyDev") {
        return ANSWERS.Good;
    }
    return ANSWERS.Bad;
}

test("A Normal user try to use a Admin command.", () => {
    expect(
        PermissionChecker({
            CommandPermission: "adminPermission",
            UserPermission: "user"
        })
    ).toBe(ANSWERS.Bad);
});

test("A Mod with permission for chats try to use a Admin command.", () => {
    expect(
        PermissionChecker({
            CommandPermission: "adminPermission",
            UserPermission: "permissionForChats"
        })
    ).toBe(ANSWERS.Bad);
});
