const request = require('supertest');
const app = require('../index');

describe("Testar minha API", () => {
    it('Deve retornar todos os filmes disponíveis', async () => {
        const res = await request(app).get('/api/movies');
        expect(res.statusCode).toEqual(200);
    });

    it('Deve retornar um filme específico', async () => {
        const res = await request(app).get('/api/movies/1');
        expect(res.statusCode).toEqual(200);
    });

    it('Deve retornar todas as séries disponíveis', async () => {
        const res = await request(app).get('/api/shows');
        expect(res.statusCode).toEqual(200);
    });

    it('Deve retornar uma série específica', async () => {
        const res = await request(app).get('/api/shows/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title');
        expect(res.body).toHaveProperty('year');
        expect(res.body).toHaveProperty('description');
        expect(res.body).toHaveProperty('ratings');
    });

    it('Deve retornar as temporadas de uma série específica', async () => {
        const res = await request(app).get('/api/shows/1/seasons');
        expect(res.statusCode).toEqual(200);
    });

    it('Deve retornar uma temporada específica de uma temporada específica', async () => {
        const res = await request(app).get('/api/shows/1/seasons/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('number');
    });

    it('Deve retornar os episódios de uma temporada específica de uma série específica', async () => {
        const res = await request(app).get('/api/shows/1/seasons/1/episodes');
        expect(res.statusCode).toEqual(200);
    });

    it('Deve retornar um episódio específico de uma temporada específica de uma série específica', async () => {
        const res = await request(app).get('/api/shows/1/seasons/1/episodes/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title');
    });

    it('Deve retornar as informações do filme criado', async () => {
        const res = await request(app)
            .post('/api/movies')
            .send({
                title: 'Teste',
                year: 2021,
                description: 'Teste',
                ratings: 5.6
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('title');
        expect(res.body).toHaveProperty('year');
        expect(res.body).toHaveProperty('description');
        expect(res.body).toHaveProperty('ratings');
    });

    it('Deve retornar as informações do filme atualizado', async () => {
        const res = await request(app)
            .put('/api/shows/1')
            .send({
                title: 'TesteAtualizado',
                year: 2023,
                description: 'TesteAtualizado',
                ratings: 7.6
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title');
        expect(res.body).toHaveProperty('year');
        expect(res.body).toHaveProperty('description');
        expect(res.body).toHaveProperty('ratings');
    });

    it('Deve retornar as informações do filme atualizado', async () => {
        const res = await request(app)
            .patch('/api/shows/1')
            .send({
                title: 'TesteAtualizado',
                year: 2023,
                description: 'TesteAtualizado',
                ratings: 7.6
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title');
        expect(res.body).toHaveProperty('year');
        expect(res.body).toHaveProperty('description');
        expect(res.body).toHaveProperty('ratings');
    });

    it('Deve retornar uma mensagem que o filme foi deletado', async () => {
        const res = await request(app).delete('/api/movies/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    });
});