import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl text-center py-10'>This is the Blog Page</h2>
            <section className="">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-2xl font-bold leading-none text-center">The questions and its answer</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Difference between SQL and NoSQL</summary>
                            <div className="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-7">
                                <div className=' border-r-none md:border-r-2 md:pr-5'>
                                    <h2 className='text-2xl text-center '>SQL</h2>
                                    <p>SQL database is relational database. This means that data is organized into tables and each table has a specific structure. Tables are connected to each other through relationships.</p>
                                    <p>SQL must be accessed in a specific manner.</p>
                                    <p>SQL databases use a vertical scaling approach, meaning they scale by adding more power to the server.</p>
                                    <p>SQL is relational</p>
                                </div>
                                <div>
                                    <h2 className='text-2xl text-center'>NoSQL</h2>
                                    <p>NoSQL databases are non-relational databases. This means that data is stored in a collection of documents. These documents have no specific structure and are not connected to each other through relationships.</p>
                                    <p>NoSQL does not need to be accessed in specific ways.</p>
                                    <p>NoSQL databases use a horizontal scaling approach, meaning they scale by adding more servers.</p>
                                    <p>NoSQL is robust</p>
                                </div>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is JWT, and how does it work?</summary>
                            <div className="px-4 pb-4">
                                <p>JWT: JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON.</p>
                                <p>To work with JWT we first need to implement it in the login system. When a user logs in, JWT takes a token from the user. This token determines whether or not JWT will be allowed to perform any subsequent actions. If we want to retrieve any information from a place where JWT is implemented, JWT will check if the user is valid. If valid will give them the information the user. JWT usually contains data in decrypted form. JWT token is divided into three parts. They are: 1/ Header 2/ Payload 3/ Signature. The token is Base64 encoded.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is the difference between javascript and NodeJS?</summary>
                            <div className="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-7">
                                <div className=' border-r-none md:border-r-2 md:pr-5'>
                                    <h2 className='text-2xl text-center '>JavaScript</h2>
                                    <p>JavaScript is a lightweight, object-oriented programming language for creating dynamic HTML pages with combinable effects.</p>
                                    <p>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.</p>
                                    <p>Javascript can only be run in browsers.</p>
                                    <p>It is basically used on the client side.</p>
                                </div>
                                <div>
                                    <h2 className='text-2xl text-center'>Node JS</h2>
                                    <p>When invoked in the V8 engine or through the Node interpreter, Node.js presents a number of objects and functions generally accessible in JavaScript code.</p>
                                    <p>Node JS is a JavaScript Run-Time Environment.</p>
                                    <p>Node.js is an open-source server environment.</p>
                                    <p>It is mostly used on the server side.</p>
                                    <p>Nodejs is written in C, C++, and Javascript.</p>
                                </div>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does NodeJS handle multiple requests at the same time?</summary>
                            <div className="px-4 pb-4">
                                <p>NodeJS works in two ways. Asynchronous, and non-blocking I/O.
NodeJS receives multiple client requests and puts them in an event queue. NodeJS is built with the concept of event-driven architecture. NodeJS server has an internal component called EventLoop which is an infinite loop that receives requests and processes them. When a request for data is made the event loop processes the request and if it is able to process the request without requiring any blocking IO operations, the event loop itself processes the request and sends the response to the client itself. If the current request uses a blocking IO operation, the event loop checks to see if there are threads available in the thread pool, picks up a thread from the thread pool, and assigns the specified request to the selected thread.</p>    
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;