describe('Позитивный кейс авторизации qa.studio', function () {
    
    it('открываю сайт', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('german@dolnikov.ru ');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton'). click();
        cy.get('#messageHeader'). contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon')
        })
})
    

describe('Логика восстановления пароля qa.studio', function () { 

    it('открываю сайт', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton'). click();
        cy.get('#mailForgot'). type('ploomy@list.ru ');
        cy.get('#restoreEmailButton'). click();
        cy.get('#messageHeader'). contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon')
        })
 })

 describe('Негативный кейс авторизации qa.studio', function () { 

    it('открываю сайт', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('german@dolnikov.ru ');
        cy.get('#pass'). type('idontLoveqastudio1');
        cy.get('#loginButton'). click();
        cy.get('#messageHeader'). contains ('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
    })
})

describe('Негативный кейс авторизации qa.studio', function () {
    
    it('открываю сайт', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('al-port@yandex.ru');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton'). click();
        cy.get('#messageHeader'). contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
        })
})

describe('Негативный кейс валидации qa.studio', function () { 

    it('открываю сайт', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('germandolnikov.ru ');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton'). click();
        cy.get('#messageHeader'). contains ('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon')
    })
})

describe('Приведение к строчным буквам в логине qa.studio', function () { 

    it('открываю сайт', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('GerMan@Dolnikov.ru');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton'). click();
        cy.get('#messageHeader'). contains ('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon')
    })
})
