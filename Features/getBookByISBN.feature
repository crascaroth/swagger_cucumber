Feature: Getting a book by ISBN
    Scenario: Getting Specific Valid Book 
        Given I access the API Swagger
        When I want to find a book with ISBN "9781449325862"
        Then I should receive the book with ISBN "9781449325862"

    Scenario: Getting Specific Invalid Book 
        Given I access the API Swagger
        When I want to find a book with ISBN "assd"
        Then I should not receive the book with ISBN "assd"
