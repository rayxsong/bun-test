const server = Bun.serve({
    // Alternative: 
    // port: process.env.PORT || 8888,
    port: Bun.env.PORT || 8888,
    fetch(req) {
        // Basic log
        // return new Response("Hello!");

        // Routing
        const url = new URL(req.url);
        if (url.pathname === "/") return new Response("Home!");
        return new Response("Not found!");

    },
})

console.log(`Lisetning on port ${server.port}`);

export function add(a: number, b: number): number {
    return a + b;
}

export function sub(a: number, b: number): number {
    return a - b;
}
