// describe("One way test", () => {
//   it("Searchs one way destination", () => {
//     cy.visit("http://localhost:3000/");

//     cy.get('[data-cy="where"]').type("Rovaniemi");
//     cy.get('[data-cy="radius"]').type("20");

//     cy.contains("Search").click();
//   });
// });

// describe("Roadtrip test", () => {
//   it("Visits the SpotFinder", () => {
//     cy.visit("http://localhost:3000/");

//     cy.contains("Road trip").click();

//     cy.get('[data-cy="from"]').type("Rovaniemi");
//     cy.get('[data-cy="to"]').type("Helsinki");
//     cy.get('[data-cy="radius"]').type("20");

//     cy.contains("Search").click();
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

// describe("Order test", () => {
//   it("Visits all routes", () => {
//     cy.visit("http://localhost:3000/adventures");

//     cy.contains("Learn more").click();

//     cy.get('[data-cy="quantity"]').type("10");
//     cy.contains("Add to cart").click();

//     cy.contains("Please fill all fields");

//     cy.get(":nth-child(2) > .sc-fXynhf > .sc-fEOsli").click();
//     cy.get('[data-cy="quantity"]').type("10");
//     cy.get('[data-cy="time"]').type("11:00");
//     cy.get('[data-cy="date"]').type("2023-05-08");

//     cy.contains("Add to cart").click();

//     cy.contains("Added to cart");
//   });
// });

describe("Shopping cart test", () => {
  it("Visits all routes", () => {
    cy.visit("http://localhost:3000/adventures");
    cy.get(".cart").click();
    cy.contains("Shopping cart");

    cy.contains("SoulMate Huskies");

    cy.get('[data-cy="fname"]').type("Martin");
    cy.get('[data-cy="lname"]').type("Heslar");

    cy.contains("Order").click();
    cy.contains("Please fill all information");
    cy.get(
      ".sc-dmRaPn > .sc-bjUoiL > .sc-idiyUo > .sc-ivTmOn > .sc-cxabCf > .close"
    ).click();

    cy.get('[data-cy="fname"]').type("Martin");
    cy.get('[data-cy="lname"]').type("Heslar");
    cy.get('[data-cy="mail"]').type("mail@gmail.com");
    cy.get('[data-cy="phone"]').type("732 123 456");

    cy.contains("Order").click();

    cy.contains("Your order has been placed.");
  });
});
