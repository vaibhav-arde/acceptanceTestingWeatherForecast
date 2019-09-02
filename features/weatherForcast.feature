@weatherForcast
Feature: As a whetherForecast service provider, I should be able to fetch the whether details from the application successfully

  Background: Launch Weather Forecast web application
        Given Launch Weather Forecast web application

  @complete @test1
  Scenario Outline: Verify 5 days of weather forecast displayed for the valid city name
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the <cityName> for whetherforecast
    Then As per cityName 5 wheather forecast to be displayed

    Examples:
      | cityName  |
      | aberdeen  |
      | dundee    |
      | edinburgh |
      | glasgow   |
      | perth     |
      | stirling  |

  @complete @test2Nagative
  Scenario Outline: Verify error message displayed for the invalid city name
    When I enter the <cityName> for whetherforecast
    Then I should be able to launch the application with header1 "Error retrieving the forecast"

      Examples:
        | cityName  |
        | London    |
        | 123456789 |
        | !@£$%^&*( |

  @complete @test2
  Scenario Outline: Verify that user is able to expand the forecast data and able to view forecast for every 3 hours.
    When I enter the stirling for whetherforecast
    Then I should able to select a <day>
    Then user should see Three hourly forcast for that <day>

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @complete @test3
  Scenario Outline: Verify that user is able to collapse the forecast hour data.
    When I enter the edinburgh for whetherforecast
    Then I should able to select a <day>
    Then Status of hourly forecast should be hidden for <day>

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |
  
  @complete @test4
  Scenario Outline: Daily forecast should summarise the 3 hour data for maximum temperatue
    When I enter the perth for whetherforecast
    Then I should able to select a <day>
    Then For the <day> maximum temperature should be summarised

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @complete @test5
  Scenario Outline: Daily forecast should summarise the 3 hour data for minimum temperatue
    When I enter the glasgow for whetherforecast
    Then I should able to select a <day>
    Then For the <day> minimum temperature should be summarised

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @complete @test6
  Scenario Outline: Daily forecast should summarise the aggregated rainfall
    When I enter the dundee for whetherforecast
    Then I should able to select a <day>
    Then For the <day> aggregated rainfall should be validated

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @complete @test7
  Scenario Outline: Daily forecast should summarise the dominant wind condition
    When I enter the glasgow for whetherforecast
    Then I should able to select a <day>
    Then For the <day> dominant wind condition should be validated

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

@complete @test8
  Scenario Outline: Daily forecast should summarise the dominant wind speed
    When I enter the glasgow for whetherforecast
    Then I should able to select a <day>
    Then For the <day> dominant wind speed should be validated

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |