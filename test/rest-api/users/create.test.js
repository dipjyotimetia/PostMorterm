
const { request, expect } = require('../../setup.js');


describe('users - create', function () {
  it('should respond with correct data', async function () {
    const response = await request.post('/api/v1/users/')
      .send({
        "name": "Nicolas",
        "email": "nico@gmail.com",
        "password": "123",
        "avatar": "https://api.lorem.space/image/face?w=640&h=480"
      });

    expect(response.status).to.be.oneOf([200, 201, 204]);
  });
});

