function memoize(reducer) {
    // Create a cache object to store previous inputs and results
    const cache = {};

    return function (...inputs) {

        // Generate a unique key for the given inputs
        const key = inputs.sort().join('-');

        // Check if the inputs have been previously computed
        if (key in cache) {
            // Return the cached result if the inputs have been computed before
            return cache[key];
        }
        // Compute the result using the reducer function
        const result = reducer(...inputs);

        // Store the result in the cache
        cache[key] = result;

        // Return the computed result
        return result;
    }
}

// Example usage:

// Define the reducer function
const add = (a, b) => a + b;

// Call the memoize function with the reducer 
const memoizeAdd = memoize(add);
