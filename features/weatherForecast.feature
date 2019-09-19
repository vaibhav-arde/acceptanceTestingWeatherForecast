@weatherForecast
Feature: As a weatherForecast service provider, I should be able to fetch the weather details from the application successfully

  Background: Launch Weather Forecast web application
        Given Launch Weather Forecast web application

  @complete @UIvalidation @pageTitle
  Scenario: Verify page title
    Then Page title should be "5 Weather Forecast"

  @complete @UIvalidation @header
  Scenario: Verify page header
    Then I should be able to launch the application with header "Five Day Weather Forecast for"

  @complete @UIvalidation @textTypeInput
  Scenario: Verify text input for city name
    Then Validate text input field for city

  @complete @UIvalidation @defaultCity
  Scenario: Verify default city to be Glasgow
    Then Verify default city to be "Glasgow"

  @complete @smoke
  Scenario Outline: Verify 5 days of weather forecast displayed for the valid city name
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter <cityName> for weatherforecast
    Then As per cityName 5 wheather forecast to be displayed

    Examples:
      | cityName  |
      | aberdeen  |
      | dundee    |
      | edinburgh |
      | glasgow   |
      | perth     |
      | stirling  |

  @complete @test2Nagative @test
  Scenario Outline: Verify error message displayed for the invalid city name
    When I enter <cityName> for weatherforecast
    Then I should be able to launch the application with header1 "Error retrieving the forecast"

      Examples:
        | cityName  |
        | London    |
        | 123456789 |
        | !@£$%^&*( |
        | null      |

  @complete @test2 @threehourdata
  Scenario Outline: Verify that user is able to expand the forecast data and able to view forecast for every 3 hours.
    When I enter <cityName> for weatherforecast
    Then I should able to select a <day>
    Then user should see Three hourly forcast for that <day>

    Examples:
      | day | cityName  |
      | 1   | aberdeen  |
      | 2   | dundee    |
      | 3   | edinburgh |
      | 4   | glasgow   |
      | 5   | perth     |

  @complete @test3 @collapse
  Scenario Outline: Verify that user is able to collapse the forecast hour data.
    When I enter <cityName> for weatherforecast
    Then I should able to select a <day>
    Then Status of hourly forecast should be hidden for <day>

    Examples:
      | day | cityName  |
      | 1   | aberdeen  |
      | 2   | dundee    |
      | 3   | edinburgh |
      | 4   | glasgow   |
      | 5   | perth     |
  
  @complete @test4 @maximumtemperatue
  Scenario Outline: Daily forecast should summarise the 3 hour data for maximum temperatue
    When I enter <cityName> for weatherforecast
    Then I should able to select a <day>
    Then For the <day> maximum temperature should be summarised

    Examples:
      | day | cityName  |
      | 1   | aberdeen  |
      | 2   | dundee    |
      | 3   | edinburgh |
      | 4   | glasgow   |
      | 5   | perth     |

  @complete @test5 @minimumtemperatue
  Scenario Outline: Daily forecast should summarise the 3 hour data for minimum temperatue
    When I enter <cityName> for weatherforecast
    Then I should able to select a <day>
    Then For the <day> minimum temperature should be summarised

    Examples:
      | day | cityName  |
      | 1   | aberdeen  |
      | 2   | dundee    |
      | 3   | edinburgh |
      | 4   | glasgow   |
      | 5   | perth     |

  @complete @test6 @aggregatedrainfall
  Scenario Outline: Daily forecast should summarise the aggregated rainfall
    When I enter <cityName> for weatherforecast
    Then I should able to select a <day>
    Then For the <day> aggregated rainfall should be validated

    Examples:
      | day | cityName  |
      | 1   | aberdeen  |
      | 2   | dundee    |
      | 3   | edinburgh |
      | 4   | glasgow   |
      | 5   | perth     |

  @complete @test7 @windcondition
  Scenario Outline: Daily forecast should summarise the dominant wind condition
    When I enter <cityName> for weatherforecast
    Then I should able to select a <day>
    Then For the <day> dominant wind condition should be validated

    Examples:
      | day | cityName  |
      | 1   | aberdeen  |
      | 2   | dundee    |
      | 3   | edinburgh |
      | 4   | glasgow   |
      | 5   | perth     |

  @complete @test8 @windspeed
  Scenario Outline: Daily forecast should summarise the dominant wind speed
    When I enter <cityName> for weatherforecast
    Then I should able to select a <day>
    Then For the <day> dominant wind speed should be validated

    Examples:
      | day | cityName  |
      | 1   | aberdeen  |
      | 2   | dundee    |
      | 3   | edinburgh |
      | 4   | glasgow   |
      | 5   | perth     |

  @complete @test9 @winddirection
  Scenario Outline: Daily forecast should summarise the dominant wind direction
    When I enter <cityName> for weatherforecast
    Then I should able to select a <day>
    Then For the <day> dominant wind direction should be validated

    Examples:
      | day | cityName  |
      | 1   | aberdeen  |
      | 2   | dundee    |
      | 3   | edinburgh |
      | 4   | glasgow   |
      | 5   | perth     |