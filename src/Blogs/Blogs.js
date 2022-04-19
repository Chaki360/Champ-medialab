import React from 'react';

const Blogs = () => {
    return (
        <section className='flex container'>
            <div className='flex-1 lg:flex-auto lg:w-6/12 flex flex-col justify-center h-[70vh] items-center'>
                <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is the difference between authorization and authentication?</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Authentication means confirming your own identity, while authorization means granting access to the system. In simple terms, authentication is the process of verifying who you are, while authorization is the process of granting permission to cloudHQ to access your cloud accounts (copy files, restore emails, etc.) on your behalf.</p>
                </a>
            </div>
            <div className='flex-1 lg:flex-auto lg:w-6/12 flex flex-col justify-center h-[70vh] items-center'>
                <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What other services does firebase provide other than authentication?</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">There are many services which Firebase provides, Most useful of them are:
                        <br />
                        <ul>
                            <li>Cloud Firestore</li>
                            <li>Cloud Functions</li>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                            <li>Google Analytics</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                        </ul></p>
                </a>
            </div>





        </section>
    );
};

export default Blogs;