describe('Checkout Test', () => {
  beforeEach(() => {
    // Login
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Should complete checkout step one', () => {
    // Thêm sản phẩm vào giỏ
    cy.get('.inventory_item').first().find('.btn_inventory').click();

    // Vào giỏ hàng
    cy.get('.shopping_cart_link').click();

    // Nhấn Checkout
    cy.get('#checkout').click();

    // Nhập thông tin
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');

    // Continue
    cy.get('#continue').click();

    // Kiểm tra chuyển sang bước 2
    cy.url().should('include', '/checkout-step-two.html');
  });
});