// Calculator.spec.js
import { mount } from '@vue/test-utils';
import Calculatora from '../views/Calculadora.vue'; // Ajusta la ruta a la de tu componente

describe('Calculator.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Calculatora)
  })

  it('debería renderizar todos los botones correctamente', () => {
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(17) // Debe haber 17 botones en total
  })

  it('debería mostrar el número en pantalla cuando se presiona un número', async () => {
    const button = wrapper.find('button:nth-child(1)') // Selecciona el primer botón (7 en este caso)
    await button.trigger('click')
    expect(wrapper.find('input').element.value).toBe('7')
  })

  it('debería hacer una suma correctamente', async () => {
    await wrapper.find('button:nth-child(9)').trigger('click') // Presiona "1"
    await wrapper.find('button:nth-child(16)').trigger('click') // Presiona "+"
    await wrapper.find('button:nth-child(10)').trigger('click') // Presiona "2"
    await wrapper.find('button:nth-child(15)').trigger('click') // Presiona "="

    expect(wrapper.find('input').element.value).toBe('3')
  })

  it('debería hacer una resta correctamente', async () => {
    await wrapper.find('button:nth-child(9)').trigger('click') // Presiona "1"
    await wrapper.find('button:nth-child(13)').trigger('click') // Presiona "0"
    await wrapper.find('button:nth-child(12)').trigger('click') // Presiona "-"
    await wrapper.find('button:nth-child(10)').trigger('click') // Presiona "2"
    await wrapper.find('button:nth-child(15)').trigger('click') // Presiona "="

    expect(wrapper.find('input').element.value).toBe('8')
  })

  it('debería hacer una multiplicación correctamente', async () => {
    await wrapper.find('button:nth-child(5)').trigger('click') // Presiona "4"
    await wrapper.find('button:nth-child(8)').trigger('click') // Presiona "×"
    await wrapper.find('button:nth-child(6)').trigger('click') // Presiona "5"
    await wrapper.find('button:nth-child(15)').trigger('click') // Presiona "="

    expect(wrapper.find('input').element.value).toBe('20')
  })

  it('debería hacer una división correctamente', async () => {
    await wrapper.find('button:nth-child(5)').trigger('click') // Presiona "4"
    await wrapper.find('button:nth-child(4)').trigger('click') // Presiona "÷"
    await wrapper.find('button:nth-child(10)').trigger('click') // Presiona "2"
    await wrapper.find('button:nth-child(15)').trigger('click') // Presiona "="

    expect(wrapper.find('input').element.value).toBe('2')
  })

  it('debería reiniciar la pantalla al presionar "C"', async () => {
    await wrapper.find('button:nth-child(9)').trigger('click') // Presiona "1"
    await wrapper.find('button:nth-child(17)').trigger('click') // Presiona "C"
    expect(wrapper.find('input').element.value).toBe('0')
  })
})
