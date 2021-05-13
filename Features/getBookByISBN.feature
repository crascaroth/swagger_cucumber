Feature: Getting a book by ISBN
    Scenario: Getting Specific Valid Book 
        Given I have an url "/BookStore/v1/Book" with ISBN "9781449325862"
        When I use "get"
        Then I should receive a specific "object"

    Scenario: Getting Specific Invalid Book 
        Given I have an url "/BookStore/v1/Book" with ISBN "assd"
        When I use "get"
        Then I should receive a specific "object"
