import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { debounce } from 'lodash';

// import { useDispatch, useSelector } from 'react-redux';
// import { START_CAR, STOP_CAR, ADD_CAR } from '../utils/actions';

export default function SearchBar({ dataService }) {
    //   const dispatch = useDispatch();
    //   const state = useSelector((state) => state);

    // getAlbums: _.debounce(async function() {
    //     const response = await AlbumService.fetchAlbums();
    //     this.albums = response.data.albums;
    //   }, 1000);

    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const results = await dataService.getData(searchTerm);
            console.log("searchTerm", searchTerm)
            console.log(results)
        };
        const getResults = debounce(fetchData, 500)
        getResults();
    }, [searchTerm]);

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor="search">Search</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="search"
                        name="search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                </Form.Group>
                <Button
                    disabled={!searchTerm}
                    type="submit"
                    variant="success"
                >
                    Submit
                </Button>
            </Form>
        </>
    );
}
