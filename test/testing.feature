Feature: Checking Validation
    Scenario: phone
        Given "093 305 367"
    Scenario: email
        Given "info.sophat@gmail.com"
    Scenario: password
        Given "@FFss234"
    Scenario: isEmpty
        Given " "
    Scenario: isNumber
        Given "123"