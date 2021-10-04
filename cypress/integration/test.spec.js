describe("Testing search feature", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/").wait(1000);
  });

  it("clicks on the show more button and find 4 itens on the list", () => {
    cy.get("[data-test=autocomplete-input-button]")
      .click()
      .get("li")
      .should("have.length", 4);
  });

  it("types 'o' and find 4 itens on the list", () => {
    cy.get("[data-test=autocomplete-input]")
      .type("o")
      .get("li")
      .should("have.length", 4);
  });

  it("types '2' and find 3 itens on the list", () => {
    cy.get("[data-test=autocomplete-input]")
      .type("2")
      .get("li")
      .should("have.length", 3);
  });

  it("type 'z' and doesn't find any item on the list", () => {
    cy.get("[data-test=autocomplete-input]")
      .type("z")
      .get("[data-test=option-list-item-not-found]")
      .should("be.visible");
  });
});

describe("Testing selection feature", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/").wait(1000);
  });

  it("selects first element of the products list and check if the list updates", () => {
    cy.get("[data-test=autocomplete-input-button]")
      .click()
      .get("[data-test=option-list-item-0]")
      .click();

    cy.get("[data-test=autocomplete-input-button]")
      .click()
      .get("li")
      .should("have.length", 3);
  });
});

describe("Testing delection feature", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/").wait(1000);
  });

  it("selects third element of the products list and delete it", () => {
    cy.get("[data-test=autocomplete-input-button]")
      .click()
      .get("[data-test=option-list-item-2]")
      .click()
      .get("[data-test=delete-element-0]")
      .click();

    cy.get("[data-test=autocomplete-input-button]")
      .click()
      .get("li")
      .should("have.length", 4);
  });
});
