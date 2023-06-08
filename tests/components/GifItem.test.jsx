import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => {

    const titulo = 'Yoda';
    const url = 'https://starwars.fandom.com/es/wiki/Yoda';

    test('debe de hacer match con el snapshot', () => {

        const { contianer } = render(<GifItem titulo={titulo} url={url} />);
        expect(contianer).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem titulo={titulo} url={url} />);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(titulo);
        
    });

    test('debe de mostrar el titulo en el componente', () => {

        render(<GifItem titulo={titulo} url={url} />);
        expect( screen.getByText( titulo ) ).toBeTruthy();

    });

});