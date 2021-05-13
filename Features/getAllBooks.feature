Feature: Getting all books from the API
  Scenario: Getting Books
    Given I have an url "/BookStore/v1/Books"
    When I use "get"
    Then I should receive "array"

