import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        welcome:
            "Bienvenido a la Api de Komi Shouko, los endpoints hasta el momento estan aquí.",
        endpoints: [
            {
                endpoint: "/komi",
                description: "Regresa un booleano si Komi Shouko está online."
            },
            {
                endpoint: "/guilds",
                description:
                    "Regresa un objeto con la cantidad de servidores y una lista de los servidores."
            },
            {
                endpoint: "/guilds/:id",
                description:
                    "Regresa un objeto con la información del servidor por su id."
            },
            {
                endpoint: "/invite",
                description:
                    "Regresa un objeto con la invitación de Komi Shouko."
            }
        ]
    });
});

router.get("/komi", (req, res) => {
    res.json(req.komi.isOnline);
});

router.get("/guilds", (req, res) => {
    res.json({
        guildCount: req.komi.guilds.cache.size,
        guilds: req.komi.guilds.cache.map((guild) => {
            return {
                id: guild.id,
                name: guild.name,
                icon: guild.iconURL(),
                owner: req.komi.users.resolve(guild.ownerId)?.tag,
                members: guild.memberCount
            };
        })
    });
});

router.get("/guilds/:id", (req, res) => {
    const guild = req.komi.guilds.cache.get(req.params.id);
    if (!guild) {
        res.status(404).json({
            error: "No se encontró el servidor."
        });
    } else {
        res.json({
            id: guild.id,
            name: guild.name,
            icon: guild.iconURL(),
            owner: req.komi.users.resolve(guild.ownerId)?.tag,
            members: guild.memberCount
        });
    }
});

router.get("/invite", (req, res) => {
    res.json({
        invite: "https://discord.com/api/oauth2/authorize?client_id=875166925884370994&permissions=8&scope=applications.commands%20bot"
    });
});

export default router;
