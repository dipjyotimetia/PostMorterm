
const { request, expect } = require('../../setup.js');


describe('users - update', function () {
  it('should respond with correct data', async function () {
    const response = await request.put('/api/v1/users/1')
      .send({
        "name": "Nicolas"
      });

    expect(response.status).to.be.oneOf([200, 201, 204]);
  });
});

