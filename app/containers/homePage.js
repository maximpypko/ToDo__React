import React from 'react';
import Form from '../components/form';
import List from '../components/list';

function HomePage({
    data,
    createCallback
}) {

    return (
        <>
            <Form handlerSubmit={createCallback} />
            <List items={data}   
            />
        </>
    )
}

export default HomePage;