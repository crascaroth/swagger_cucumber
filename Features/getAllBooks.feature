Feature: Getting all books from the API
  Scenario: Getting Books
    Given I access the API Swagger
    When I want to find all Books
    Then I should receive all Books

