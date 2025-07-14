import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas sobre <GifExpertApp />', () => {

    test('', () => {

        render(<GifExpertApp />)
        screen.debug()

    })
})