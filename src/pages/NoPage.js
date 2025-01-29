import React, { useEffect } from 'react';

const NoPage = () => {
    useEffect(() => {
        document.title = "404 - Riley Ziegler";
    }, []);
    
    return (
        <React.Fragment>
            <div className="container">
                <h1 className="error">404</h1>
                <p>Sorry this page does not exist!</p>
            </div>
        </React.Fragment>
    );
};

export default NoPage;