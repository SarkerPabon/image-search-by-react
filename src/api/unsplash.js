import axios from 'axios';

export default axios.create({
	baseURL : 'https://api.unsplash.com',
	headers : {
		Authorization : 'Client-ID B8FLL9pkqFtcv6-NQSk3Ce8zqwMTmFQbXTwibqfLTaQ'
	}
});
