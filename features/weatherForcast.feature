@weatherForcast
Feature: As a weatherForecast service provider, I should be able to fetch the weather details from the application successfully

  Background: Launch Weather Forecast web application
        Given Launch Weather Forecast web application

  @complete @test1
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

  @complete @test2Nagative
  Scenario Outline: Verify error message displayed for the invalid city name
    When I enter <cityName> for weatherforecast
    Then I should be able to launch the application with header1 "Error retrieving the forecast"

      Examples:
        | cityName  |
        | London    |
        | 123456789 |
        | !@£$%^&*( |

  @complete @test2 @threehourdata
  Scenario Outline: Verify that user is able to expand the forecast data and able to view forecast for every 3 hours.
    When I enter stirling for weatherforecast
    Then I should able to select a <day>
    Then user should see Three hourly forcast for that <day>

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @complete @test3 @collapse
  Scenario Outline: Verify that user is able to collapse the forecast hour data.
    When I enter edinburgh for weatherforecast
    Then I should able to select a <day>
    Then Status of hourly forecast should be hidden for <day>

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |
  
  @complete @test4 @maximumtemperatue
  Scenario Outline: Daily forecast should summarise the 3 hour data for maximum temperatue
    When I enter perth for weatherforecast
    Then I should able to select a <day>
    Then For the <day> maximum temperature should be summarised

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @complete @test5 @minimumtemperatue
  Scenario Outline: Daily forecast should summarise the 3 hour data for minimum temperatue
    When I enter glasgow for weatherforecast
    Then I should able to select a <day>
    Then For the <day> minimum temperature should be summarised

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @complete @test6 @aggregatedrainfall
  Scenario Outline: Daily forecast should summarise the aggregated rainfall
    When I enter dundee for weatherforecast
    Then I should able to select a <day>
    Then For the <day> aggregated rainfall should be validated

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @complete @test7 @windcondition
  Scenario Outline: Daily forecast should summarise the dominant wind condition
    When I enter glasgow for weatherforecast
    Then I should able to select a <day>
    Then For the <day> dominant wind condition should be validated

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @complete @test8 @windspeed
  Scenario Outline: Daily forecast should summarise the dominant wind speed
    When I enter glasgow for weatherforecast
    Then I should able to select a <day>
    Then For the <day> dominant wind speed should be validated

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @complete @test9 @winddirection
  Scenario Outline: Daily forecast should summarise the dominant wind direction
    When I enter glasgow for weatherforecast
    Then I should able to select a <day>
    Then For the <day> dominant wind direction should be validated

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |