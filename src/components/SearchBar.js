import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { ADD_TITLES, CLEAR_TITLES, UPDATE_TITLES } from '../utils/actions';

export default function SearchBar({ dataService }) {
    const dispatch = useDispatch();
    // const state = useSelector((state) => state);

    // console.log("State", state)

    const [searchTerm, setSearchTerm] = useState("");
    const [triggerSearch, setTriggerSearch] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const { results } = await dataService.getData(searchTerm);
            // console.log("searchTerm", searchTerm)
            // console.log(results)
            dispatch({
                type: UPDATE_TITLES,
                payload: results
            })
        };
        fetchData();
    }, [triggerSearch]);

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
                    onClick={(e) => {
                        e.preventDefault();
                        setTriggerSearch(!triggerSearch)
                    }}
                >
                    Submit
                </Button>
            </Form>
        </>
    );
}
