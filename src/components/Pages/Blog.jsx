

const Blog = () => {
    return (
        <div className="container mx-auto">
            <div className='mt-20 mb-20'>
                <h2 className='flex justify-center text-orange-400 font-semibold text-7xl mb-10 mt-5'>My <span className='text-white'> Blogs </span> Questions</h2>

                <div className='text-left'>
                    <h2 className='font-semibold text-orange-500 text-2xl'>
                        1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h2>
                    <p className='font-semibold  text-2xl text-white'>
                        A:Access Token:
                        An access token is a credential that is used to authenticate and authorize a user or a client application to access protected resources.
                        <br />
                        When a user or client application successfully authenticates with an authentication server, it receives an access token. The access token is typically a long, randomly generated string or a JSON Web Token (JWT). It contains encoded information about the users identity and permissions.
                        <br />
                        Refresh Token:
                        The refresh token is securely stored on the client-side and is typically kept longer than the access token.
                        <br />
                        Alongside the access token, the client receives a refresh token during the authentication process. The refresh token is a long-lived credential that allows the client to obtain a new access token without requiring the user to reauthenticate.
                    </p>

                    <br />

                    <h2 className='font-semibold text-orange-500 text-2xl'>
                        2.Compare SQL and NoSQL databases?
                    </h2>
                    <p className='font-semibold  text-2xl text-white'>
                        A: SQL: 1) SQL databases follow a rigid, predefined schema where data is organized into tables with rows and columns.
                        <br />
                        2)SQL databases use a standardized query language called SQL, which provides powerful declarative statements for querying, manipulating, and managing data. SQL offers a rich set of operations like SELECT, INSERT, UPDATE, DELETE, JOIN, and complex aggregations.
                        <br />
                        3)SQL databases traditionally excel at vertical scalability, where hardware upgrades and optimization can handle increased workloads.
                        <br />
                        4)SQL databases are often favored for applications with well-defined schemas and complex relationships, such as traditional business applications, e-commerce platforms, content management systems, and financial systems.
                        <br />
                        NoSQL: 1)NoSQL databases offer flexible, schema-less data models. They can handle unstructured, semi-structured, and evolving data formats.
                        <br />
                        2)NoSQL query languages often prioritize simplicity and performance over the extensive functionality of SQL.
                        <br />
                        3)NoSQL databases are designed with horizontal scalability in mind. They can scale easily by distributing data across multiple servers or clusters, allowing for high-performance and handling massive workloads.
                        <br />
                        4)NoSQL databases are commonly used in scenarios where flexibility, high scalability, and performance are essential.
                    </p>

                    <br />

                    <h2 className='font-semibold text-orange-500 text-2xl'>
                        3.What is express js? What is Nest JS?
                    </h2>
                    <p className='font-semibold  text-2xl text-white'>
                        A: Express js: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
                        <br />
                        Nest js: Nest.js is a progressive, extensible, and highly scalable Node.js framework for building efficient and maintainable server-side applications.

                    </p>

                    <br />

                    <h2 className='font-semibold text-orange-500 text-2xl'>
                        4.What is MongoDB aggregate and how does it work ?
                    </h2>
                    <p className='font-semibold  text-2xl text-white'>
                        A:In MongoDB, the aggregate function is a powerful feature that allows you to perform complex data analysis and aggregation operations on your data.
                        <br />
                        1.Pipeline Stages: <br />
                        The aggregate function takes an array of pipeline stages as its argument. Each stage performs a specific operation on the data.<br /> Some commonly used stages include:
                        - $match: Filters the documents based on specified criteria, similar to the find operation.<br />
                        - $group: Groups the documents together based on specified fields and performs aggregation operations like sum, average, count, etc., on grouped data.<br />
                        - $project: Specifies which fields to include or exclude from the final result, allowing you to reshape the documents.<br />
                        - $sort: Sorts the documents based on specified fields.<br />
                        - $lookup: Performs a left outer join with another collection, allowing you to combine data from multiple collections.<br />
                        - $unwind: Deconstructs an array field into separate documents, creating multiple documents for each element in the array.<br />
                        2.Execution Order:<br />
                        The pipeline stages are executed in the order they are specified in the pipeline array. The output of each stage becomes the input for the next stage in the pipeline.
                        <br />
                        3.Result:<br />
                        The final stage of the pipeline returns the result of the aggregation operation. The result can be customized using the $project stage to shape the output documents as desired.
                        <br />
                        4.Aggregation Operators:<br />
                        MongoDB provides a rich set of aggregation operators that can be used within stages to perform various operations. These operators include arithmetic operations, comparison operators, array operators, date operators, conditional operators, and more.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;