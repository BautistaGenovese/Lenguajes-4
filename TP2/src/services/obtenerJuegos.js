const VITE_RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const elegidos = [
    "cyberpunk-2077",            // Cyberpunk 2077
    "grand-theft-aito-vi",       // GTA VI
    "fornite-battle-royale",     // Fortnite Battle Royale
    "marvels-spider-man-2",      // Marvel's Spider-Man 2
    "god-of-war-2",              // God of War (2018)
    "god-of-war-ragnarok",       // God of War Ragnarök
    "the-last-of-us-part-i",     // The Last of Us Part I
    "the-last-of-us-part-2",     // The Last of Us Part II
    "ghost-of-tsushima",         // Ghost of Tsushima
    "grand-theft-auto-v",        // GTA V
    "red-dead-redemption-2",     // Red Dead Redemption 2
    "the-witcher-3-wild-hunt",   // The Witcher 3: Wild Hunt
    "elden-ring",               // Elden Ring
    "shadows-die-twice",         // Sekiro: Shadows Die Twice
    "dark-souls-iii",            // Dark Souls III
    "bloodborne",               // Bloodborne
    "death-stranding",          // Death Stranding
    "control",                  // Control
    "doom-eternal",             // DOOM Eternal
    "horizon-zero-dawn",         // Horizon Zero Dawn
    "ghostrunner",              // Ghostrunner
    "hogwarts-legacy",          // Hogwarts Legacy
    "baldurs-gate-3",           // Baldur's Gate 3
    "uncharted-4-a-thiefs-end",  // Uncharted 4: A Thief's End
    "detroit-become-human",      // Detroit: Become Human
    "days-gone",                // Days Gone
    "helldivers-2",             // Helldivers 2
    "minecraft",                // Minecraft
    "rocket-league",            // Rocket League
    "apex-legends",             // Apex Legends
];

export default async function obtenerJuegos() {
    const juegosCache = sessionStorage.getItem("juegosElegidos");
    
    // Si hay juegos en caché los retorna
    if (juegosCache) {
        return JSON.parse(juegosCache);
    }
    
    const juegos = await Promise.all(
        elegidos.map(async (slug) => {
            const respuesta = await fetch(
                `https://api.rawg.io/api/games/${slug}?key=${VITE_RAWG_API_KEY}`
            );
            
            if (!respuesta.ok) {
                throw new Error(`No se pudo cargar ${slug}`);
            }
            
            return respuesta.json();
        })
    );
    
    // Guardamos los datos en la caché
    sessionStorage.setItem("juegosElegidos", JSON.stringify(juegos));

    return juegos;
}