let mix = require("laravel-mix");

mix.js("src/app.js", "dist").sass("src/main.scss", "dist");
