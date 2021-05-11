Feature: Get All Books
    Get All Books from the API

    Scenario: Get all Books
        Given "/BookStore/v1/Books"
        When i use "get"
        Then I should receive "array"


Feature: 
    # Scenario: Friday is Friday
    #     Given today is Friday
    #     When I ask whether it's Friday yet
    #     Then I should be told "TGIF"



    # Scenario Outline: Today is or is not Friday
    #     Given today is "<day>"
    #     When I ask whether it's Friday yet
    #     Then I should be told "<answer>"

    #     Examples:
    #         | day            | answer |
    #         | Friday         | TGIF   |
    #         | Sunday         | Nope   |
    #         | anything else! | Nope   |