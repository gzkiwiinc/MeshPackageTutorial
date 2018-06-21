module.exports = {
	name: process.env.NODE_ENV === 'production' ? 'personal' : 'test',
	engineVersion: '4.1',
	accessKey: process.env.DEPLOY === 'production' ? '711b46f83b63f7137b4f1e5e4ce35dbd' : 'af261ca04d5c7baefdf21d6c380fd53c',
	privateKey: process.env.DEPLOY === 'production' ? '5a3cc5a7e8a66f7000924ea4eb150e8c' : 'cc9d8fd0a3197082a2ceb1bcd5c1d051'
}
