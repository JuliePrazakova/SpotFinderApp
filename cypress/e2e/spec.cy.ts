// describe("One way test", () => {
//   it("Searchs one way destination", () => {
//     cy.visit("http://localhost:3000/");

//     cy.get('[data-cy="where"]').type("owdcno");
//     cy.contains("Search").click();

//     cy.contains("Please fill real cities and radius.");
//     cy.get('[data-cy="where"]').clear().type("Rovaniemi");
//     cy.contains("Search").click();

//     cy.contains("Please fill real cities and radius.");

//     cy.get('[data-cy="radius"]').type("20");
//     cy.contains("Search").click();
//     cy.url().should("include", "/search");

//     cy.wait(1000);

//     cy.get(".mapboxgl-marker").last().click();
//     cy.contains("Learn more").click();
//   });
// });

// describe("Roadtrip test", () => {
//   it("Visits the SpotFinder", () => {
//     cy.visit("http://localhost:3000/");

//     cy.contains("Road trip").click();

//     cy.get('[data-cy="from"]').type("owdcno");
//     cy.contains("Search").click();

//     cy.contains("Please fill real cities and radius.");

//     cy.get('[data-cy="from"]').clear();
//     cy.get('[data-cy="to"]').type("owdcno");
//     cy.contains("Search").click();

//     cy.contains("Please fill real cities and radius.");

//     cy.get('[data-cy="from"]').type("Rovaniemi");
//     cy.get('[data-cy="to"]').clear().type("Helsinki");
//     cy.contains("Search").click();

//     cy.contains("Please fill real cities and radius.");

//     cy.get('[data-cy="radius"]').type("20");
//     cy.contains("Search").click();
//     cy.url().should("include", "/search");

//     cy.wait(1000);

//     cy.get(".mapboxgl-marker").last().click();
//     cy.contains("Learn more").click();
//   });
// });

// describe("Adventure page test", () => {
//   it("Goes from adventures page to one adventure", () => {
//     cy.visit("http://localhost:3000/adventures");

//     cy.contains("Learn more").click();

//     cy.url().should("include", "/adventures/");
//   });
// });

// describe("All routes test", () => {
//   it("Visits all routes", () => {
//     cy.visit("http://localhost:3000/");

//     cy.contains("Adventures").click();
//     cy.url().should("include", "/adventures");

//     cy.contains("Home").click();
//     cy.url().should("include", "/");

//     cy.contains("Learn more").click();
//     cy.url().should("include", "/adventures");

//     cy.get(".img").click();
//     cy.url().should("include", "/");
//   });
// });

describe("Add to shopping cart test", () => {
  it("Visits all routes", () => {
    // add frist tour to cart
    cy.visit("http://localhost:3000/adventures");

    cy.contains("Learn more").click();

    cy.get('[data-cy="quantity"]').type("10");
    cy.contains("Add to cart").click();

    cy.contains("Please fill all fields");

    cy.get(":nth-child(2) > .sc-TRNrF > .sc-fEOsli").click();
    cy.get('[data-cy="quantity"]').clear().type("10");
    cy.get('[data-cy="time"]').type("11:00");
    cy.get('[data-cy="date"]').type("2023-05-08");

    cy.contains("Add to cart").click();

    cy.contains("Added to cart");

    // add second tour to cart
    cy.contains("Adventures").click();

    cy.get(" .sc-jOhDuK > :nth-child(1) > input").type("Snowmobile");

    cy.contains("Learn more").click();

    cy.get(".sc-TRNrF > .sc-fEOsli").click();
    cy.get('[data-cy="quantity"]').type("8");
    cy.get('[data-cy="time"]').type("11:00");
    cy.get('[data-cy="date"]').type("2023-06-04");

    cy.contains("Add to cart").click();

    cy.contains("Added to cart");

    cy.get(".cart").click();

    cy.get(".sc-himrzO > :nth-child(2)").contains("2640");
    cy.contains("Long husky ride");
    cy.contains("2023-05-08");
    cy.contains("10");
    cy.contains("Snowmobile ride");
    cy.contains("2023-06-04");
    cy.contains("8");
  });
});

// describe("Place order test", () => {
//   it("Places an order", () => {
//     cy.visit("http://localhost:3000/adventures");
//     cy.get(".cart").click();
//     cy.contains("Shopping cart");

//     cy.contains("SoulMate Huskies");

//     cy.get('[data-cy="fname"]').type("Martin");
//     cy.get('[data-cy="lname"]').type("Heslar");

//     cy.contains("Order").click();
//     cy.contains("Please fill all information");
//     cy.get(
//       ".sc-fLlhyt > .sc-bjUoiL > .sc-idiyUo > .sc-llJcti > .sc-iIPllB > .close"
//     ).click();

//     cy.get('[data-cy="mail"]').type("mail@gmail.com");
//     cy.get('[data-cy="phone"]').type("732 123 456");

//     cy.contains("Order").click();
//     cy.contains("Please fill all information");

//     // add to cart
//     cy.visit("http://localhost:3000/adventures");

//     cy.contains("Learn more").click();

//     cy.get(":nth-child(2) > .sc-TRNrF > .sc-fEOsli").click();
//     cy.get('[data-cy="quantity"]').type("10");
//     cy.get('[data-cy="time"]').type("11:00");
//     cy.get('[data-cy="date"]').type("2023-05-08");

//     cy.contains("Add to cart").click();

//     cy.contains("Added to cart");

//     // place order again
//     cy.get(".cart").click();
//     cy.contains("Shopping cart");

//     cy.contains("SoulMate Huskies");

//     cy.get('[data-cy="fname"]').type("Martin");
//     cy.get('[data-cy="lname"]').type("Heslar");
//     cy.get('[data-cy="mail"]').type("mail@gmail.com");
//     cy.get('[data-cy="phone"]').type("732 123 456");

//     cy.contains("Order").click();

//     cy.contains("Your order has been placed.");
//   });
// });
