import React from 'react';

const Blogs = () => {
    return (
        <section className='flex container'>
            <div className='flex-1 lg:flex-auto lg:w-6/12 flex flex-col justify-center h-[70vh] items-center'>
                <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is the difference between authorization and authentication?</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Semantic tag elements are only available on HTML5 version.It help us to figure out what exactly we are writing inside the HTML tag.Before Semantic tag arrival we were used to use div tag which normally doesn’t give us enough info about the written contents inside the tag but semantic tags (Footer,Header,Nav and so on....) givs us clear idea about our activity inside that tag element.</p>
                </a>
            </div>
            <div className='flex-1 lg:flex-auto lg:w-6/12 flex flex-col justify-center h-[70vh] items-center'>
                <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">The inline elements and the inline block elements one of the basic important concepts of the web development and sometimes it can be confusing for the developers.So Let's see some difference between this two.
                        Inline elements take only necessary width of the webpage means inline block elements takes the full available width of it.Inline elements don't start new line while inline block elements always starts a new line.Inline elements don't have top or bottom but inline block elements have it.</p>
                </a>
            </div>





        </section>
    );
};

export default Blogs;