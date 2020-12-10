const request = require('supertest');
const app = require('../app');

test('Should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'jesttest',
      email: 'jest@test.hu',
      password: 'mypasswo234'
    })
    .expect(201);
});
