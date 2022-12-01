CREATE DATABASE komi_shouko
    WITH
    OWNER = mrmikedev
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

DROP TABLE global_welcome_system;
DROP TABLE global_goodbye_system;

CREATE TABLE IF NOT EXISTS global_welcome_system (
    id_guild INTEGER UNIQUE NOT NULL,
    id_channel INTEGER UNIQUE NOT NULL,
    title_embed VARCHAR(255) NOT NULL,
    message_embed TEXT NOT NULL,
    image_embed TEXT NOT NULL,
    color_embed VARCHAR(7) NOT NULL,
    PRIMARY KEY (id_guild)
);

CREATE TABLE IF NOT EXISTS global_goodbye_system (
    id_guild INTEGER UNIQUE NOT NULL,
    id_channel INTEGER UNIQUE NOT NULL,
    title_embed VARCHAR(255) NOT NULL,
    message_embed TEXT NOT NULL,
    image_embed TEXT NOT NULL,
    color_embed VARCHAR(7) NOT NULL,
    PRIMARY KEY (id_guild)
);

-- INSERT INTO global_welcome_system (id_guild, id_channel, title_embed, message_embed, image_embed, color_embed) VALUES (1, 2, 'Titulo de prueba', 'Bienvenido', 'Imagen de prueba', '#ff00ff');

-- INSERT INTO global_goodbye_system (id_guild, id_channel, title_embed, message_embed, image_embed, color_embed) VALUES (1, 2, 'Titulo de prueba', 'Bienvenido', 'Imagen de prueba', '#ff00ff);