const request = require('supertest')
const app = require('./index.js')

describe('GET /api/hello',()=>{
	it('should return a json object with a message',(done)=> {
		request(app)
		.get('/api/hello')
		.expect(200)
		.expect('Content-Type',/json/)
		.end((err,res)=>{
			if(err) return done(err);
			if(res.body.message && res.body.message ==="Salem"){
				console.log("valid test")
				done()
			}else{
			done(new  Error("the message should be equal to 'Salem'"))
			}
		})
	})
})
