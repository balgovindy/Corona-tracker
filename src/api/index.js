import axios from 'axios';

const BASE_URL = 'https://covid19.mathdro.id/api';



export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate: date } } = await axios.get(BASE_URL);
        return { confirmed, recovered, deaths, date };
    } catch (error) {
        console.error(error)
    }
}
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/daily`);
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }))
    } catch (error) {
        console.error(error);
        return error;
    }
}