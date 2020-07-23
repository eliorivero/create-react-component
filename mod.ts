import { ensureDir } from "https://deno.land/std/fs/ensure_dir.ts";

const [name] = Deno.args;

const contenido: string = `import React from 'react';

function ${name}() {
    return (
        <div className="${name.toLowerCase()}">
        </div>
    );
}
export default ${name};
`;

const ruta: string = "./app/components/" + name + "/";

ensureDir(ruta)
  .then(() => {
    Deno.writeTextFile(ruta + "index.js", contenido);
    console.info("Listo! " + name);
});