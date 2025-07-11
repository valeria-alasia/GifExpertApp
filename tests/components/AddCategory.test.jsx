import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe de cambiar el valor de la caja de texto', () => {
       render (<AddCategory onNewCategory={() => {}} />);
       //screen.debug()
       // Obtener el input
         const input = screen.getByRole('textbox');
       // Disparo el evento de input con un valor y espero que ese valor se refleje en el input 
        fireEvent.input(input, { target: { value: 'Saitama' } });
        expect(input.value).toBe('Saitama');
            });
    
    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        

        const inputValue = 'Saitama';
        //Simulo la función que viene del componente padre
        const onNewCategory = jest.fn();

        render (<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        // Disparo el evento de input con un valor  
        fireEvent.input(input, { target: { value: inputValue } });
        // Disparo el evento de submit
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // Verifico que se haya llamado con el valor correcto
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

     
    });

    test('no debe de llamar onNewCategory si el input está vacío', () => { 
        
        //Simulo la función que viene del componente padre
        const onNewCategory = jest.fn();

        render (<AddCategory onNewCategory={onNewCategory} />)
        
        const form = screen.getByRole('form');  
  
        // Disparo el evento de submit
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
        // Verifico que no se haya llamado con ningún valor
     });

    
});