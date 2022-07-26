/**
 * JS file for CRUD
 */


/**
 * @typedef {{
 *  title: string,
 *  date: string, 
 *  summary: string 
 * }} Blogpost
 */

/**
 * Defines the custom elements used for blogpost.
 */
 export function defineBlogElements() {
    console.info("Registering custom elements... ");
}

export function generateBlogId() {
    return crypto.randomUUID();
};

export const examplePost = {
    "title": "Do you know CRUD?",
    "date": "07/20/2022",
    "summary": "When we are building APIs, we want our models to provide four basic types of functionality. The model must be able to Create, Read, Update, and Delete resources. Computer scientists often refer to these functions by the acronym CRUD. A model should have the ability to perform at most these four functions in order to be complete. If an action cannot be described by one of these four operations, then it should potentially be a model of its own."
};

/* Storage Layer
 * ============= */

/**
 * @returns the JSON map of posts from local storage.
 */
 function loadPosts() {
    return JSON.parse(localStorage.getItem('books')) || {};
} /* loadPosts */

/**
 * @param {{string: Book}} books a JSON map of id->book to put into local storage.
 */
function storePosts(books) {
    localStorage.setItem('books', JSON.stringify(books));
} /* storePosts */
