import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import Axios from '../views/Axios.vue';

// Simula axios para evitar peticiones reales durante las pruebas
vi.mock('axios');

describe('Axios.vue', () => {
    it('carga y muestra los posts correctamente', async () => {
        // Mock de respuesta de axios
        const mockUsers = [
            {
                id: 1,
                firstName: "Emily",
                lastName: "Johnson",
                hair: {
                    color: "brown",
                    length: "long"
                },
                email: "emily.johnson@x.dummyjson.com",
                phone: "+81 965-431-3024",
                image: "https://dummyjson.com/icon/emilys/128",
                address: {
                    city: "Phoenix",
                    state: "Mississippi",
                    country: "United States"
                },
                university: "University of Wisconsin--Madison",
                role: "admin",
                company: {
                    name: "Klein, Koepp and Kuhlman",
                    catchPhrase: "User-centric contextually-based middleware",
                    bs: "revolutionary strategize e-business"
                },
            },
            {
                id: 2,
                firstName: "Michael",
                lastName: "Williams",
                hair: {
                    color: "brown",
                    length: "long"
                },
                email: "michael.williams@x.dummyjson.com",
                phone: "+49 258-627-6644",
                image: "https://dummyjson.com/icon/michaelw/128",
                address: {
                    city: "Houston",
                    state: "Alabama",
                    country: "United States"
                },
                company: {
                    name: "Klein, Koepp and Kuhlman",
                    catchPhrase: "User-centric contextually-based middleware",
                    bs: "revolutionary strategize e-business"
                },
                university: "Ohio State University",
                role: "admin"
            }
        ];

        // Configura el mock para axios.get
        axios.get.mockResolvedValueOnce({ data: { users: mockUsers } });

        // Monta el componente
        const wrapper = mount(Axios);

        // Espera a que Vue procese la llamada API
        await wrapper.vm.$nextTick();

        // Espera un tiempo para asegurarse de que la respuesta se haya procesado
        await new Promise(resolve => setTimeout(resolve, 100));

        // Busca los títulos `<h2>`
        const postTitles = wrapper.findAll('h2');

        // Verifica que haya dos posts
        expect(postTitles.length).toBe(2);

        // Verifica los títulos
        expect(postTitles[0].text()).toContain('Emily');
        expect(postTitles[1].text()).toContain('Michael');
    });
});
