import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {
  const title = 'Saitama';
  const url = 'https://one-punch.con/saitama.jpg';
//   const id = '123';

  test('debe hacer match con el snapshot', () => {
   
    const {container} = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar la imagen con el URL y el ALT indicados', () => {

    render(<GifItem title={title} url={url} />);
    //screen.debug();
   
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);

  });

  test('debe de mostrar el título en el componente', () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();

  });

})