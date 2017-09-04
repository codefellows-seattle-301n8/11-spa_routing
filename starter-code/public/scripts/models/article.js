'use strict';
var app = app || {};

console.log('hello');

// var data = $.getJSON("/books")
// var carroll = data.books.filter(function (book) {
//     return book.author == "Lewis Carroll";
// });
// var pratchett = data.books.filter(function (book) {
//     return book.author == "Terry Pratchett";
// });
// carroll.foreach(function (book) {
//     $.ajax({ url: "/books/" + book.id;, type: "DELETE" });
// });
// pratchett.foreach(function (book) {
//     $.ajax({
//         url: "/books/" + book.id,
//         type: "PUT",
//         data: JSON.stringify(request),
//         contentType: "application/json"
//     });
// });

// var data = $.getJSON("/books").done(function (data) {
//     var carroll = data.books.filter(function (book) {
//         return book.author == "Lewis Carroll";
//     });
//     var pratchett = data.books.filter(function (book) {
//         return book.author == "Terry Pratchett";
//     });
//     carroll.foreach(function (book) {
//         $.ajax({ url: "/books/" + book.id;, type: "DELETE" });
//     });
//     pratchett.foreach(function (book) {
//         $.post("/books/" + book.id, JSON.stringify(request));
//     });
// });


$.getJSON("/books", function(data) {
    data.books.forEach(function (book) {
        var endpoint = "/books/" + book.id;
        if (book.author == "Lewis Carroll") {
            $.ajax({ url: endpoint, type: "DELETE" });
        } else if (book.author == "Terry Pratchett") {
            var request = {title: book.title.toUpperCase(), author: book.author};
            $.ajax({
                url: endpoint,
                type: "PUT",
                data: JSON.stringify(request),
                contentType: "application/json"
            });
        }
    });
});

(function(module) {
  function Article(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Article.all = [3, 55, 999];

  Article.prototype.toHtml = function() {
    var template = Handlebars.compile($('#article-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
    this.body = marked(this.body);

    return template(this);
  };

  Article.loadAll = rows => {
    rows.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));
    Article.all = rows.map(ele => new Article(ele));
  };

  Article.fetchAll = callback => {
    $.get('/articles')
    .then(
      results => {
        Article.loadAll(results);
        callback();
      }
    )
  };

  Article.numWordsAll = () => {
    return Article.all.map(article => article.body.match(/\b\w+/g).length)
                      .reduce((a, b) => a + b)
  };

  Article.allAuthors = () => {
    return Article.all.map(article => article.author)
                      .reduce((names, name) => {
                        if (names.indexOf(name) === -1) names.push(name);
                        return names;
                      }, []);
  };

  Article.numWordsByAuthor = () => {
    return Article.allAuthors().map(author => {
      return {
        name: author,
        numWords: Article.all.filter(a => a.author === author)
                             .map(a => a.body.match(/\b\w+/g).length)
                             .reduce((a, b) => a + b)
      }
    })
  };

  Article.stats = () => {
    return {
      numArticles: Article.all.length,
      numWords: Article.numWordsAll(),
      Authors: Article.allAuthors(),
    }
  };

  Article.truncateTable = callback => {
    $.ajax({
      url: '/articles',
      method: 'DELETE',
    })
    .then(console.log)
    .then(callback);
  };

  Article.prototype.insertRecord = function(callback) {
    $.post('/articles', {author: this.author, authorUrl: this.authorUrl, body: this.body, category: this.category, publishedOn: this.publishedOn, title: this.title})
    .then(console.log)
    .then(callback);
  };

  Article.prototype.deleteRecord = function(callback) {
    $.ajax({
      url: `/articles/${this.article_id}`,
      method: 'DELETE'
    })
    .then(console.log)
    .then(callback);
  };

  Article.prototype.updateRecord = function(callback) {
    $.ajax({
      url: `/articles/${this.article_id}`,
      method: 'PUT',
      data: {
        author: this.author,
        authorUrl: this.authorUrl,
        body: this.body,
        category: this.category,
        publishedOn: this.publishedOn,
        title: this.title}
    })
    .then(console.log)
    .then(callback);
  };

  module.Article = Article;
})(app);
