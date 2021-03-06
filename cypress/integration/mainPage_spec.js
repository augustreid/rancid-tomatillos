describe('Rancid Tomatillos main page display', () => {

    beforeEach(() => {
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
            "movies": [
                {
                  "id": 694919,
                  "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
                  "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
                  "title": "Money Plane",
                  "average_rating": 6.666666666666667,
                  "release_date": "2020-09-29"
                },
                {
                  "id": 337401,
                  "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
                  "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
                  "title": "Mulan",
                  "average_rating": 4.909090909090909,
                  "release_date": "2020-09-04"
                },
                {
                  "id": 718444,
                  "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
                  "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
                  "title": "Rogue",
                  "average_rating": 5.428571428571429,
                  "release_date": "2020-08-20"
                }]
              }) 
        cy.visit('http://localhost:3000');
      });

    it('Should be able to visit the page and render the correct elements"', () => {
        cy.get("main")
        .contains("Rancid Tomatillos")
    });

    it("Should be able to click a movie poster to visit the page for that movie's details", () => {
        cy.get("p")
        .contains("Mulan")
        .click()
        .visit("http://localhost:3000/337401")
    })
  });