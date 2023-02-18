export class DataService {
    getData = async (query) => {
        var locQueryUrl = 'https://www.loc.gov/search/?fo=json';
        locQueryUrl = locQueryUrl + '&q=' + query;

        const response = await fetch(`${locQueryUrl}${query}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            }
        });

        return await response.json();
    };
}
