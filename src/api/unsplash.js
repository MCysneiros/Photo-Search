import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: `Client-ID 96lf7yi8_VI7s3xgT3R6OlW8uirr7fxhU6yyTiClsVc`,
	},
});
