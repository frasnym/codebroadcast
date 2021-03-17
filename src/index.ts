import { schedule } from 'node-cron';

let lastCheckIn: Date;

schedule('*/5 * * * * *', () => {
	console.log('Last check-in', lastCheckIn);
	const newCheckIn = new Date();
	lastCheckIn = newCheckIn;
	console.log('Checking in after 5 second', newCheckIn);
});
