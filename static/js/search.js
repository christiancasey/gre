function displayResults (results, store) {
  const searchResultsSummary = document.getElementById('search-results-summary')
  const searchResultsList = document.getElementById('search-results-list')
  if (results.length) {
    searchResultsSummary.innerHTML = results.length + ' results found for <b>' + q + '</b>:'
    let resultList = ''
    // Iterate and build result list elements
    for (const n in results) {
      const item = store[results[n].ref]
      resultList += '<article class="list__item post">'

      // breadcrumbs
      resultList += '<div class="smallcrumbs">' + item.breadcrumbs + '</div>'

      // linked title
      resultList += '<h3 class="list__title post__title"><a href="' + item.url + '">' + item.title + '</a></h3>'

      // garden description snippet
      resultList += item.content.replace(/^(.|\n)*Garden Description /, '').substring(0, 179) + '...'

      resultList += '</article>'
    }
    searchResultsList.innerHTML = resultList
  } else {
    searchResultsSummary.innerHTML = 'No results found for <b>' + q + '</b>'
    searchResultsList.innerHTML = ''
  }
}

// Get the query parameter(s)
const params = new URLSearchParams(window.location.search)
let q = params.get('q')

// Perform a search if there is a query
if (q) {

  // Retain the search input in the form when displaying results
  window.setTimeout((function(){document.getElementById('search-input').setAttribute('value', q)}), 500)

  const idx = lunr(function () {
    this.ref('id')
    this.field('title', {
      boost: 10
    })
    this.field('content')

    for (const key in window.store) {
      this.add({
        id: key,
        title: window.store[key].title,
        //tags: window.store[key].category,
        content: window.store[key].content
      })
    }
  })

  // Only return results that contain ALL query terms
  qall = '+' + q.split(' ').join(' +')

  try {
    // Perform the search
    const results = idx.search(qall)
    // Update the list with results
    displayResults(results, window.store)
  }
  catch {
    const searchResultsSummary = document.getElementById('search-results-summary')
    searchResultsSummary.innerHTML = 'Error parsing the query <b>' + q + '</b>'
    searchResultsList = document.getElementById('search-results-list').innerHTML = ''
  }
}
