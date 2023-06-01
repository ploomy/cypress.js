describe('Кейс покупки', function () {
    
    it('открываю сайт', function () {
        cy.visit('https://huntingpony.com/')
        cy.get ('[data-index="0"] > .header__collections-controls > .header__collections-link',).click();
        cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a'). click();
        cy.get('.add-cart-counter__btn').wait(5000).click();
        cy.get('[data-add-cart-counter-plus=""]').wait(3000).click();
        cy.wait(3000).get('.header__cart > .icon > .header__control-bage').click();
        cy.wait(3000).get('.cart-controls > .button').click()
})
})