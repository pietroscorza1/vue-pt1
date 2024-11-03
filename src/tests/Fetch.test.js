import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import Fetch from '../views/Fetch.vue';

describe('Fetch.vue', () => {
    // Mock de `fetch` para simular la respuesta de la API
    global.fetch = vi.fn();

    it('carrega i mostra els posts correctament', async () => {
        // Creamos una respuesta simulada para fetch con dos posts
        const mockPosts = [
            { id: 1, name: 'User 1', email: 'user1@example.com', body: 'Aquest és el post 1' },
            { id: 2, name: 'User 2', email: 'user2@example.com', body: 'Aquest és el post 2' }
        ];
        
        // Configuramos el mock de `fetch` para que devuelva una respuesta simulada
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockPosts
        });

        // Montamos el componente
        const wrapper = mount(Fetch);

        // Esperamos a que el componente termine de cargar los datos
        await new Promise(resolve => setTimeout(resolve, 100));
        await wrapper.vm.$nextTick();

        // Verificamos que haya títulos h3
        const postTitles = wrapper.findAll('h3');

        // Comprobamos que hay dos posts
        expect(postTitles.length).toBe(2);

        // Comprobamos los títulos
        expect(postTitles[0].text()).toContain('User 1');
        expect(postTitles[1].text()).toContain('User 2');
    });
});
