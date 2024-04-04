import React from "react";

interface NotFoundProps { }

const NotFound = (props: NotFoundProps) => {
    return (
        <main className="container mt-5">
            <section className="row">
                <h1 className="text-center text-primary">NotFound Page</h1>
            </section>
        </main>
    )
};

export default NotFound;