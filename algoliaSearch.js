// for the default version
const algoliasearch = require('algoliasearch');

// for the default version
// import algoliasearch from 'algoliasearch';

// for the search only version
// import algoliasearch from 'algoliasearch/lite';

// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

const client = algoliasearch('JQL15WD72T', '5af633b8fe05e08d22f181ade7aee679');
const index = client.initIndex('name');


let PROJECT_ID = "o3hzv34b";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "student"]');

// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// fetch the content

const fetchDataFromDatabase = () => {
  fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
      // get the list element, and the first item
      const fetchedData = result
      fetchedData.forEach(data => {
        data.objectID = data.slug.current;
      });

      // console.log(fetchedData) 
      
      
      index.saveObjects(fetchedData, { autoGenerateObjectIDIfNotExist: true });
      }
    )
    .catch((err) => console.error(err));
}
fetchDataFromDatabase()
// console.log(records)