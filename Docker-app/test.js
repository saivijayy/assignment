const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Path to your app

chai.use(chaiHttp);
const { expect } = chai;

describe('Integration Tests', () => {
  it('should respond with Hello, world!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, world!');
        done();
      });
  });
});
