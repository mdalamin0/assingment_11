import useTitle from "../../Componets/useTitle/useTitle";


const Blog = () => {
    useTitle('Blog')
    return (
        <div className="bg-base-200 p-8">
            <h3 className="text-center text-purple-600 text-3xl font-bold my-8">Welcome to our Question & Answer Page</h3>
            <div>
                <h2 className="text-2xl font-semibold">1: What is an access token and refresh token?</h2>
                <p className="text-purple-500 mt-3">An access token and a refresh token are commonly used in authentication and authorization protocols, such as OAuth, to provide secure access to resources on behalf of a user or an application. Here a brief explanation of each: <br /> <br />

                    <span className="font-bold"> Access Token:</span> An access token is a credential that is issued by an authentication server or authorization server upon successful authentication of a user or an application. It is typically a string of characters that represents the user authorization to access certain protected resources, such as APIs or web services. <br /> <br />

                    <span className="font-bold">Refresh Token:</span> A refresh token is a credential that is also issued alongside an access token during the initial authentication process. Its purpose is to obtain a new, valid access token without requiring the user to re-authenticate. Unlike access tokens, refresh tokens have a longer expiration time and are used to obtain fresh access tokens when the current one expires. This helps improve security by reducing the lifespan of access tokens and minimizing the potential impact of unauthorized access if an access token is compromised.</p>
                <h2 className="text-2xl font-semibold mt-8">How do they work and where should we store them on the client-side?</h2>
                <p className="font-bold text-purple-500 mt-3">Here a simplified flow of how access and refresh tokens work together:</p>
                <ul className="text-purple-500">
                    <li>When a user or client logs in or authorizes an application, the authentication server issues an access token and a refresh token.</li>
                    <li>The access token is sent with each API request to authenticate and authorize the user or client.</li>
                    <li>If the access token expires, the client can use the refresh token to request a new access token without requiring the user to log in again.</li>
                    <li>The authentication server verifies the refresh token validity, and if valid, issues a new access token.</li>
                    <li>The client receives the new access token, which can then be used to make API requests.</li>
                </ul>
                <p className="text-purple-500 font-bold mt-8">Regarding the storage of tokens on the client-side, there are a few options:</p>
                <p className="text-purple-500"> <span className="font-bold">Local Storage:</span>
                    Local storage is a web browser feature that allows data to be stored persistently on the client-side. You can store tokens in the local storage, and they will remain available even if the page is refreshed or closed. However, keep in mind that storing sensitive tokens in local storage can make them vulnerable to cross-site scripting (XSS) attacks. <br /> <br />

                    <span className="font-bold"> Cookies:</span>
                    Cookies are another option for storing tokens on the client-side. You can set a cookie with the token value, and the browser will include the cookie with each subsequent request to the server. Cookies can be set with secure and http-only flags to enhance security. However, cookies also have limitations, such as size restrictions and potential vulnerabilities to cross-site request forgery (CSRF) attacks.</p>

            </div>
            <div className="">
                <h2 className="text-2xl font-bold my-5">2: Compare SQL and NoSQL databases?</h2>
                <p className="text-purple-500">
                    The five critical differences between SQL and NoSQL are: <br /><br />

                    SQL databases are relational, and NoSQL databases are non-relational. <br />
                    SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                    SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
            <div>
                <h2 className="font-bold text-2xl my-5">3: Compare SQL and NoSQL databases? What is express js? What is Nest JS?</h2>
                <p className="text-purple-500">Express is a minimalist and flexible framework that is easy to use and has a large community of developers. <br /> NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold my-5">4: What is MongoDB aggregate and how does it work </h2>
                <p className="text-purple-500">Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Blog;