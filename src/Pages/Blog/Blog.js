import React from 'react';
import useTitle from '../../Hook/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Blog</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">Difference between SQL and NoSQL</h3>
                        <p className="mt-1 dark:text-gray-400">SQL is Structured Query Language or primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database. Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data. Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is JWT? and how does it work?</h3>
                        <p className="mt-1 dark:text-gray-400">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. Basically the identity provider generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. User sign-in using username and password or google/facebook. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is the difference between javascript and Node JS?</h3>
                        <p className="mt-1 dark:text-gray-400">JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">How does NodeJS handle multiple requests at the same time?</h3>
                        <p className="mt-1 dark:text-gray-400">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;