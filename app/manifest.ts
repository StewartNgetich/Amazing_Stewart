import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Stewart Futures",
        short_name: "Stewart",
        description: "Multidisciplinary creative crafting digital experiences that connect and convert.",
        start_url: "/",
        display: "standalone",
        background_color: "#09090b", // zinc-950
        theme_color: "#09090b",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    }
}
