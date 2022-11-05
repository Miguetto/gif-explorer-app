import { useState } from "react";
import { AddCategoria, GifGrid } from "./components";

export const GifExplorerApp = () => {

    const [categorias, setCategorias] = useState([ 'Star Wars' ]);

    const onAddCategoria = ( newCategoria ) => {

        if( categorias.includes( newCategoria ) ) return;
        setCategorias([ newCategoria, ...categorias ]);
    }

  return (
    <>
        <AddCategoria 
            onNewCategoria={ onAddCategoria }
        />

        { categorias.map( categoria => (
                <GifGrid 
                    key={ categoria } 
                    categoria={ categoria }
                />
            ))
        }
        
    </>
  )
}
