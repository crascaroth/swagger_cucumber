Feature: Getting all books from the API
  Scenario: Getting Books
    Given I have an url "/BookStore/v1/Books"
    When I use "get"
    Then I should receive "array"

# Feature: Addition
#   Scenario: 1 + 0
#     Given I start with 1
#     When I add 0
#     Then I end up with 1

#   Scenario: 1 + 1
#     Given I start with 1
#     When I add 1
#     Then I end up with 2