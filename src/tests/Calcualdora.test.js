import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Calcualdora from '../views/Calculadora.vue'; 
describe('Calcualdora.vue', () => {
  it('debería tener un valor inicial de display igual a "0"', () => {
    const wrapper = mount(Calcualdora);
    expect(wrapper.vm.display).toBe('0'); 
  });
  it('debería sumar dos números correctamente', async () => {
    const wrapper = mount(Calcualdora);

    await wrapper.vm.appendNumber('2');
    expect(wrapper.vm.display).toBe('2');
    await wrapper.vm.setOperation('+');
    expect(wrapper.vm.currentOperation).toBe('+');

    await wrapper.vm.appendNumber('3');
    expect(wrapper.vm.display).toBe('3'); 

    await wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('5'); 
  });
it('debería concatenar varios números correctamente al hacer clic en los botones', async () => {
    const wrapper = mount(Calcualdora);

    await wrapper.vm.appendNumber('2');
    await wrapper.vm.appendNumber('3');
    await wrapper.vm.appendNumber('4');

    expect(wrapper.vm.display).toBe('234');
  });

  it("Deberia hacer bien la operacion", async () => {
    const wrapper = mount(Calcualdora);

    await wrapper.vm.appendNumber('2');
    await wrapper.vm.setOperation('+');
    await wrapper.vm.appendNumber('3');
    await wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('5');
  });
});
